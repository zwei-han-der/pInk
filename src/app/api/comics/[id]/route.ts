import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
let prisma: PrismaClient;
if (!globalForPrisma.prisma) {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
} else {
  prisma = globalForPrisma.prisma;
}

// Função para adicionar headers CORS
function addCorsHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
}

// Método OPTIONS para CORS preflight
export async function OPTIONS(request: NextRequest) {
    const response = new NextResponse(null, { status: 200 });
    return addCorsHeaders(response);
}

export async function GET(_request: Request, context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        if (isNaN(id)) {
            const response = NextResponse.json({ success: false, error: 'ID inválido' }, { status: 400 });
            return addCorsHeaders(response);
        }
        const comic = await prisma.comic.findUnique({
            where: { id },
            include: {
                idiom: true,
                publisher: true,
                author: { include: { author: true } },
                issue: true
            }
        });
        if (!comic) {
            const response = NextResponse.json({ success: false, error: 'Comic não encontrado' }, { status: 404 });
            return addCorsHeaders(response);
        }
        const response = NextResponse.json({ success: true, data: comic });
        return addCorsHeaders(response);
    } catch (error) {
        const response = NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Erro desconhecido'
        }, { status: 500 });
        return addCorsHeaders(response);
    }
}