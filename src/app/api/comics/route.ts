import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
let prisma: PrismaClient;
if (!globalForPrisma.prisma) {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
} else {
  prisma = globalForPrisma.prisma;
}

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
