import { prisma } from '@/lib/db';
import { createSuccessResponse, createErrorResponse, createOptionsResponse } from '@/lib/api-utils';

export async function OPTIONS() {
    return createOptionsResponse();
}

export async function GET(_request: Request, context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        if (isNaN(id)) {
            return createErrorResponse('ID inválido', 400);
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
            return createErrorResponse('Comic não encontrado', 404);
        }

        return createSuccessResponse(comic);
    } catch (error) {
        return createErrorResponse(error);
    }
}