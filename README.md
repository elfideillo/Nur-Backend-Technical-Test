# Nur-Backend-Technical-Test

Este proyecto es el backend de una aplicación RESTful desarrollada con **Node.js**, **Express.js** y **Prisma** como ORM. Proporciona autenticación con JWT y permite realizar operaciones CRUD sobre usuarios, además de utilizar middlewares para validaciones y autorización basada en roles.

---

## Características

- **Autenticación**: Inicio de sesión con **JSON Web Tokens (JWT)**.
- **Gestión de usuarios**:
  - Crear, leer, actualizar y eliminar usuarios (CRUD).
  - Autorización basada en roles (`admin`, `user`, `guest`).
- **Base de datos**:
  - Integración con **PostgreSQL** usando Prisma ORM.
- **Semilla de datos**:
  - Crea un usuario administrador predeterminado.
  - Genera usuarios de prueba utilizando Faker.js.
- **Middleware**:
  - Validación de autenticación.
  - Gestión segura de contraseñas con **bcrypt.js**.
- **API RESTful**:
  - Estructura clara de rutas y controladores.
- **Configuración escalable**:
  - Utiliza variables de entorno para configuración.

---

## Instalación

### 1. Requisitos previos

Asegúrate de tener instalados los siguientes elementos:

- [Node.js](https://nodejs.org/) >= 16
- [PostgreSQL](https://www.postgresql.org/) >= 12
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 2. Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repositorio-backend.git
cd tu-repositorio-backend

## 3. Instalar las dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install

## 4. Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=4000
DATABASE_URL=postgresql://postgres:tu-contraseña@localhost:5432/nurdb
JWT_SECRET=tu-clave-secreta

## 5. Configurar la base de datos

 **Ejecutar migraciones** para sincronizar el esquema con la base de datos:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   npm run seed

## 6. Iniciar el servidor

Ejecuta el siguiente comando para iniciar el servidor en modo desarrollo:

```bash
npm run dev


## Endpoints de la API

### Usuarios

- **`POST /users/register`**: Crea un nuevo usuario (requiere autenticación).
- **`POST /users/login`**: Inicia sesión y genera un token JWT.
- **`GET /users`**: Obtiene la lista de todos los usuarios (requiere autenticación).
- **`GET /users/:id`**: Obtiene los detalles de un usuario específico (requiere autenticación).
- **`PUT /users/:id`**: Actualiza la información de un usuario (requiere autenticación).
- **`DELETE /users/:id`**: Elimina un usuario (requiere autenticación).

## Estructura del Proyecto

```plaintext
├── controllers/          # Controladores de lógica de negocio
│   ├── users.js
├── middlewares/          # Middlewares de autenticación y validación
│   ├── auth.js
├── models/               # Conexión a la base de datos con Prisma
│   ├── database.js
├── prisma/               # Configuración y esquema de Prisma
│   ├── schema.prisma
│   ├── seed.js           # Script de llenado de datos iniciales
├── routes/               # Definición de rutas de la API
│   ├── users.js
├── core/
│   ├── app.js            # Configuración de Express
│   ├── server.js         # Punto de entrada del servidor
├── .env                  # Variables de entorno
├── package.json          # Configuración del proyecto

## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor en modo desarrollo con nodemon.
- **`npm run seed`**: Llena la base de datos con datos iniciales.
- **`npx prisma studio`**: Abre la interfaz gráfica de Prisma para gestionar la base de datos.

