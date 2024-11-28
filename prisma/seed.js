import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seedDatabase = async () => {
    console.log('Iniciando el proceso de seed...');

    try {
        // Crear el usuario admin
        const adminUser = await prisma.user.create({
            data: {
                name: "admin",
                email: "admin@spsgroup.com.br",
                type: "admin",
                password: "$2a$10$5mFvL9wj2zdQmY5jgPWE/.8qtjQi9S4x61Nal4kzuv/MZwLf5vkqy", // Contraseña hash
            },
        });
        console.log('Usuario admin creado:', adminUser);

        // Crear usuarios adicionales
        const users = Array.from({ length: 20 }, () => ({
            name: faker.person.fullName(), // Generar nombre completo
            email: faker.internet.email(),
            type: faker.helpers.arrayElement(['admin', 'user', 'guest']),
            password: faker.internet.password(), // En producción, reemplazar con un hash
        }));

        await prisma.user.createMany({
            data: users,
        });
        console.log('Usuarios adicionales creados exitosamente.');
    } catch (error) {
        console.error('Error durante el seed de la base de datos:', error);
    } finally {
        // Desconectar el cliente Prisma
        await prisma.$disconnect();
        console.log('Conexión a la base de datos cerrada.');
    }
};

// Ejecutar el seed
seedDatabase();