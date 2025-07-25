import { PrismaClient } from '@prisma/client';

type GlobalThis = typeof globalThis & {
  prisma?: PrismaClient;
};

const globalPrisma = globalThis as GlobalThis;

const prisma = globalPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error']
});

if (process.env.NODE_ENV === 'development') {
  globalPrisma.prisma = prisma;
}

export default prisma;