import { prisma } from '@/lib/db';
import { createSuccessResponse, createErrorResponse, createOptionsResponse } from '@/lib/api-utils';

export const OPTIONS = () => createOptionsResponse();

export async function GET() {
    try {
        const comics = await prisma.comic.findMany({
            include: {
                idiom: true,
                publisher: true,
                author: { include: { author: true } }
            },
            orderBy: { title: 'asc' }
        });
        return createSuccessResponse(comics);
    } catch (error) {
        return createErrorResponse(error);
    }
}
