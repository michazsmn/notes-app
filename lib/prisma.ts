import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

//@ts-ignore
const globalForPrisma = global as unknown as { prisma: typeof prisma } 
//@ts-ignore
const prisma = globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate()) 

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma