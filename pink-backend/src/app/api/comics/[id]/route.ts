import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export async function GET(
    _request: NextRequest,
    context: { params: { id: string } }
) {
    try {
        const id = parseInt(context.params.id);

        if (isNaN(id)) {
            const response = NextResponse.json(
                { 
                    success: false, 
                    error: 'ID inválido' 
                },
                { status: 400 }
            );
            return addCorsHeaders(response);
        }

        const comic = await prisma.comic.findUnique({
            where: { id },
            include: {
                idiom: true,
                publisher: true,
                author: {
                    include: {
                        author: true
                    }
                }
            }
        });

        if (!comic) {
            const response = NextResponse.json(
                { 
                    success: false, 
                    error: 'Comic não encontrado' 
                },
                { status: 404 }
            );
            return addCorsHeaders(response);
        }

        const response = NextResponse.json({
            success: true,
            data: comic
        });

        return addCorsHeaders(response);

    } catch (error) {
        console.error('Erro ao buscar comic:', error);
        const response = NextResponse.json(
            { 
                success: false, 
                error: 'Erro interno do servidor' 
            },
            { status: 500 }
        );
        return addCorsHeaders(response);
    }
}