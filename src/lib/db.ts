import { PrismaClient } from '@prisma/client';
import { cacheMiddleware } from './redis';

// Prevent multiple instances of Prisma Client in development
declare global {
    var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({
    log: ['error', 'warn'],
});

// Add Redis cache middleware
prisma.$use(cacheMiddleware);

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}
