import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seedDatabase = async () => {
    console.log('Seeding database...');

    const adminUser = await prisma.user.create({
        data: {
            name: "admin",
            email: "admin@spsgroup.com.br",
            type: "admin",
            password: "$2a$10$5mFvL9wj2zdQmY5jgPWE/.8qtjQi9S4x61Nal4kzuv/MZwLf5vkqy", // En producción, usa un hash para la contraseña
        },
    });

    const users = Array.from({ length: 20 }, () => ({
        name: faker.person.fullName(), // Reemplazado faker.name.fullName()
        email: faker.internet.email(),
        type: faker.helpers.arrayElement(['admin', 'user', 'guest']),
        password: faker.internet.password(),
    }));

    try {
        await prisma.user.createMany({
            data: users,
        });
        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
};

seedDatabase();
