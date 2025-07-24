
import { PrismaClient } from '@prisma/client';
type CacheMiddleware = Parameters<PrismaClient['$use']>[0] | undefined;
let cacheMiddleware: CacheMiddleware = undefined;
const hasRedis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

// Só importa o middleware se o Redis estiver configurado
async function loadCacheMiddleware() {
  if (hasRedis) {
    const redisModule = await import('./redis');
    cacheMiddleware = redisModule.cacheMiddleware;
  }
}

if (hasRedis) {
  loadCacheMiddleware().then(() => {
    if (cacheMiddleware) {
      prisma.$use(cacheMiddleware);
    }
  });
}

declare global { var prisma: PrismaClient | undefined }


export const prisma = global.prisma || new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
