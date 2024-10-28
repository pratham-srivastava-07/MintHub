import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const client = new PrismaClient()

async function main() {
    const john = await client.user.upsert({
        where: {
            email: 'pratham@gmail.com'
        }, 
        update: {},
        create: {
            email: 'pratham@gmail.com',
            password: await bcrypt.hash('123456', 6)
        }
    })
}

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
