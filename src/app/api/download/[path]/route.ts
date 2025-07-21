import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
    _request: NextRequest,
    context: { params: { path: string[] } }
) {
    try {
        const filePath = path.join(process.cwd(), 'public', 'uploads', ...context.params.path);
        
        // Verificar se o arquivo existe
        try {
            await fs.access(filePath);
        } catch {
            return NextResponse.json(
                { error: 'Arquivo não encontrado' },
                { status: 404 }
            );
        }

        // Ler o arquivo
        const fileBuffer = await fs.readFile(filePath);
        const fileName = path.basename(filePath);

        // Criar resposta com headers apropriados para download
        const response = new NextResponse(fileBuffer);
        response.headers.set('Content-Type', 'application/octet-stream');
        response.headers.set('Content-Disposition', `attachment; filename="${fileName}"`);
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;

    } catch (error) {
        console.error('Erro ao servir arquivo:', error);
        return NextResponse.json(
            { error: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}

export async function OPTIONS(request: NextRequest) {
    const response = new NextResponse(null, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
} 