import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function addCorsHeaders(response: NextResponse) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
}

export async function OPTIONS(request: NextRequest) {
    const response = new NextResponse(null, { status: 200 });
    return addCorsHeaders(response);
}

export async function GET(_request: NextRequest) {
    try {
        const { searchParams } = new URL(_request.url);

        const author = searchParams.get("author");
        const publisher = searchParams.get("publisher");
        const year = searchParams.get("year");
        const title = searchParams.get("title");

        const where: Record<string, unknown> = {};

        if (author) {
            where.author = {
                some: {
                    author: {
                        name: {
                            contains: author,
                            mode: 'insensitive',
                        },
                    },
                },
            };
        }
        if (publisher) {
            where.publisher = {
                name: {
                    contains: publisher,
                    mode: 'insensitive',
                },
            };
        }
        if (year) {
            where.year = parseInt(year);
        }
        if (title) {
            where.title = {
                contains: title,
                mode: 'insensitive',
            };
        }

        const comics = await prisma.comic.findMany({
            where,
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
        console.error('Erro ao buscar quadrinhos:', error);
        const response = NextResponse.json({
            success: false,
            error: 'Erro ao buscar quadrinhos'},
            { status: 500 }
        );
        return addCorsHeaders(response);
    }
}
