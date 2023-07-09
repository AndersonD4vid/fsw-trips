import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient }; // Informa que nosso prisma estar no escopo global da aplicação

// Ou se ele não estiver no escopo global ele vai criar um novo
export const prisma =
   globalForPrisma.prisma ||
   new PrismaClient({
      log: ["query"],
   });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma; // Quando criar um novo, assinar no globalForPrisma que é o que acabou de criar

// Explicação desse código: Só inicializar um client de prisma por sessão.