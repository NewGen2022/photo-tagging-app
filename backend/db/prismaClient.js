const { PrismaClient } = require('@prisma/client');
const prismaClient = new PrismaClient();
// {
//     log: ['query', 'info', 'warn', 'error'],
// }

module.exports = prismaClient;
