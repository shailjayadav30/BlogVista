
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export function getPrisma(databaseUrl: string) {
  return new PrismaClient({
    datasourceUrl: databaseUrl,
  }).$extends(withAccelerate());
}

