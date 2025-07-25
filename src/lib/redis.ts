import { Redis } from "@upstash/redis"

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  // Do not throw error in the file, check for redis availability in the files that use it
  // throw new Error('Redis credentials not found in environment variables')
  console.warn("Redis credentials not found in environment variables. Caching will be disabled.")
}

export const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null

// Cache utility functions to replace middleware functionality
export const cacheUtils = {
  // Generate cache key for database operations
  generateKey: (model: string, action: string, args: unknown) => {
    return `${model}:${action}:${JSON.stringify(args)}`
  },

  // Get cached result
  get: async (key: string) => {
    if (!redis) return null
    try {
      const cached = await redis.get(key)
      return cached ? JSON.parse(cached as string) : null
    } catch (error) {
      console.error("Cache get error:", error)
      return null
    }
  },

  // Set cache with TTL
  set: async (key: string, data: unknown, ttlSeconds = 1800) => {
    if (!redis) return
    try {
      await redis.set(key, JSON.stringify(data), { ex: ttlSeconds })
    } catch (error) {
      console.error("Cache set error:", error)
    }
  },

  // Clear cache by pattern
  clearByModel: async (model: string) => {
    if (!redis) return
    try {
      const keys = await redis.keys(`${model}:*`)
      if (keys.length > 0) {
        await Promise.all(keys.map((key) => redis.del(key)))
      }
    } catch (error) {
      console.error("Cache clear error:", error)
    }
  },

  // Clear specific cache key
  clear: async (key: string) => {
    if (!redis) return
    try {
      await redis.del(key)
    } catch (error) {
      console.error("Cache clear error:", error)
    }
  },
}

// Helper function to check if Redis is available
export const hasRedis = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
