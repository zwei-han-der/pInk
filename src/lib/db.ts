import { PrismaClient } from "@prisma/client"

declare global {
  var prismaGlobal: PrismaClient | undefined
}

export const prisma =
  prismaGlobal ||
  new PrismaClient({
    log: ["error"],
  })

if (process.env.NODE_ENV !== "production") {
  global.prismaGlobal = prisma
}
