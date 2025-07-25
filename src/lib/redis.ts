import { Redis } from "@upstash/redis"

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.warn("Redis credentials not found in environment variables. Caching will be disabled.")
}

export const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null

export const cacheUtils = {
  generateKey: (model: string, action: string, args: unknown) => {
    return `${model}:${action}:${JSON.stringify(args)}`
  },

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

  set: async (key: string, data: unknown, ttlSeconds = 1800) => {
    if (!redis) return
    try {
      await redis.set(key, JSON.stringify(data), { ex: ttlSeconds })
    } catch (error) {
      console.error("Cache set error:", error)
    }
  },

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

  clear: async (key: string) => {
    if (!redis) return
    try {
      await redis.del(key)
    } catch (error) {
      console.error("Cache clear error:", error)
    }
  },
}

export const hasRedis = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
