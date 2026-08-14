import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@hoechemsacco.com';
  
  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('Admin@123', 10);
    
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        role: Role.SUPER_ADMIN,
        profile: {
          create: {
            firstName: 'Super',
            lastName: 'Admin',
            phoneNumber: '+254700000000',
          }
        }
      }
    });
    console.log('Super Admin seeded successfully.');
  } else {
    console.log('Super Admin already exists.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
