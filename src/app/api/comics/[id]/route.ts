import { prisma } from '@/lib/db';
import { createSuccessResponse, createErrorResponse, createOptionsResponse } from '@/lib/api-utils';

export async function OPTIONS() {
    return createOptionsResponse();
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const comicId = parseInt(id);
        if (isNaN(comicId)) {
            return createErrorResponse('ID inválido', 400);
        }

        const comic = await prisma.comic.findUnique({
            where: { id: comicId },
            include: {
                idiom: true,
                publisher: true,
                author: { include: { author: true } },
                issue: true
            }
        });

        if (!comic) {
            return createErrorResponse('Comic não encontrado', 404);
        }

        return createSuccessResponse(comic);
    } catch (error) {
        return createErrorResponse(error);
    }
}