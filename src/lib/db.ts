import { PrismaClient } from '@prisma/client';
import { cacheMiddleware } from './redis';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ['error'] });

// Aplica o middleware apenas se Redis estiver configurado
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  prisma.$use(cacheMiddleware);
}

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}