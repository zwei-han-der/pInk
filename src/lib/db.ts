import { PrismaClient } from '@prisma/client';
import { cacheMiddleware } from './redis';

declare global { var prisma: PrismaClient | undefined }

export const prisma = global.prisma || new PrismaClient({ log: ['error'] });
prisma.$use(cacheMiddleware);

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
