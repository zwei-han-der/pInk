import { NextResponse } from "next/server";
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

export async function GET() {
    try {
        const comics = await prisma.comic.findMany({
            include: {
                idiom: true,
                publisher: true,
                author: {
                    include: {
                        author: true,
                    }
                }
            },
            orderBy: {
                title: 'asc'
            }
        });

        const response = NextResponse.json({
            success: true,
            data: comics,
            count: comics.length
        });

        return addCorsHeaders(response);
    } catch (error) {
        const response = NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Erro desconhecido'
        }, { status: 500 });
        return addCorsHeaders(response);
    }
}
