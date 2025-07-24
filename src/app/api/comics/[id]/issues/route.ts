import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

function addCorsHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
}

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 200 });
    return addCorsHeaders(response);
}

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
    try {
        const comicId = parseInt(params.id);
        if (isNaN(comicId)) {
            const response = NextResponse.json({ success: false, error: 'ID inválido' }, { status: 400 });
            return addCorsHeaders(response);
        }
        const issues = await prisma.issue.findMany({
            where: { comicId },
            include: { idiom: true },
            orderBy: { issueNumber: 'asc' }
        });
        const response = NextResponse.json({ success: true, data: issues, count: issues.length });
        return addCorsHeaders(response);
    } catch (error) {
        const response = NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Erro desconhecido'
        }, { status: 500 });
        return addCorsHeaders(response);
    }
}