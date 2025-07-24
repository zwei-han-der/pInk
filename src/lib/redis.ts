import { Redis } from '@upstash/redis'
import type { Prisma } from '@prisma/client';

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('Redis credentials not found in environment variables')
}

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export const cacheMiddleware: Prisma.Middleware = async (params, next) => {
  const isMutation = !['findUnique', 'findFirst', 'findMany'].includes(params.action);
  
  if (isMutation) {
    try {
      const result = await next(params);
      await Promise.all((await redis.keys(`${params.model}:*`)).map(key => redis.del(key)));
      return result;
    } catch {
      return next(params);
    }
  }

  if (params.action === 'findMany' && !params.args.where) {
    return next(params);
  }

  const key = `${params.model}:${params.action}:${JSON.stringify(params.args)}`;
  
  try {
    const cached = await redis.get(key);
    if (cached) {
      try {
        return JSON.parse(cached as string);
      } catch {
        // Ignora cache inválido
      }
    }

    const result = await next(params);
    if (result) {
      await redis.set(key, JSON.stringify(result), { 
        ex: params.action === 'findUnique' ? 3600 : 1800 
      });
    }
    return result;
  } catch {
    return next(params);
  }
};