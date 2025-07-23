import { Redis } from '@upstash/redis'
import type { Prisma } from '@prisma/client';

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('Redis credentials not found in environment variables')
}

// Create Redis client
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// Cache middleware
export const cacheMiddleware: Prisma.Middleware = async (params, next) => {
  const isMutation = !['findUnique', 'findFirst', 'findMany'].includes(params.action);
  
  // Handle mutations
  if (isMutation) {
    try {
      const result = await next(params);
      // Invalidate only related cache entries
      const keys = await redis.keys(`${params.model}:*`);
      if (keys.length > 0) {
        await Promise.all(keys.map(key => redis.del(key)));
      }
      return result;
    } catch (error) {
      console.error('Redis error during mutation:', error);
      return next(params);
    }
  }

  // Skip cache for specific conditions
  const skipCache = 
    params.action === 'findMany' && !params.args.where ||  // Skip caching full table scans
    params.args?.include?.author?.include?.author;         // Skip complex includes that might change frequently

  if (skipCache) {
    return next(params);
  }

  // Generate unique cache key
  const key = `${params.model}:${params.action}:${JSON.stringify(params.args)}`;
  
  try {
    // Try to get from cache with shorter timeout for complex queries
    const cached = await redis.get(key);
    if (cached) {
      const parsedCache = JSON.parse(cached as string);
      return parsedCache;
    }

    // If not in cache, execute query
    const result = await next(params);
    
    if (result) {
      // Different cache times based on query type
      const ttl = params.action === 'findUnique' ? 3600 : 1800; // 1 hour for single items, 30 mins for lists
      await redis.set(key, JSON.stringify(result), {
        ex: ttl
      });
    }
    
    return result;
  } catch (error) {
    console.error('Redis error during query:', error);
    return next(params);
  }
};
