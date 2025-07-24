import { prisma } from '@/lib/db';
import { createSuccessResponse, createErrorResponse, createOptionsResponse } from '@/lib/api-utils';

export async function OPTIONS() {
    return createOptionsResponse();
}

export async function GET(_request: Request, context: { params: { id: string } }) {
    try {
        const comicId = parseInt(context.params.id);
        if (isNaN(comicId)) {
            return createErrorResponse('ID inválido', 400);
        }
        const issues = await prisma.issue.findMany({
            where: { comicId },
            include: { idiom: true },
            orderBy: { issueNumber: 'asc' }
        });
        return createSuccessResponse({ issues, count: issues.length });
    } catch (error) {
        return createErrorResponse(error);
    }
}