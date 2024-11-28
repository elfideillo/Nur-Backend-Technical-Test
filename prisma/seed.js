import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const seedDatabase = async () => {
    console.log('Iniciando el proceso de seed...');

    try {
        // Encriptar la contraseña del usuario admin
        const hashedAdminPassword = await bcrypt.hash('1234', 10);

        // Crear el usuario admin
        const adminUser = await prisma.user.create({
            data: {
                name: "admin",
                email: "admin@spsgroup.com.br",
                type: "admin",
                password: hashedAdminPassword, // Contraseña encriptada
            },
        });
        console.log('Usuario admin creado:', adminUser);

        // Crear usuarios adicionales
        const users = await Promise.all(
            Array.from({ length: 20 }).map(async () => ({
                name: faker.person.fullName(), // Generar nombre completo
                email: faker.internet.email(),
                type: faker.helpers.arrayElement(['admin', 'user', 'guest']),
                password: await bcrypt.hash(faker.internet.password(), 10), // Encriptar contraseñas generadas
            }))
        );

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
