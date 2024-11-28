# **Nur-Backend-Technical-Test**

Este proyecto es el backend de una aplicación RESTful desarrollada con Node.js, Express.js y Prisma como ORM. Proporciona autenticación con JWT y permite realizar operaciones CRUD sobre usuarios.

---
# Backend con Node.js, Express y Prisma

Este backend implementa un sistema de autenticación y gestión de usuarios, utilizando **Node.js**, **Express**, **Prisma** y **PostgreSQL**.

## Características

- **Autenticación**: Inicio de sesión con JSON Web Tokens (JWT).
- **Gestión de usuarios**:
  - Crear, leer, actualizar y eliminar usuarios (CRUD).
  - Autorización basada en roles.
- **Base de datos**: Integración con PostgreSQL usando Prisma ORM.
- **Semilla de datos**: Crea un usuario administrador y usuarios de prueba automáticamente.
- **Middleware**: Uso de middlewares para autenticación y validación.

---

## Instalación

### 1. Requisitos previos

- [Node.js](https://nodejs.org/) >= 16
- [PostgreSQL](https://www.postgresql.org/) >= 12
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 2. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio-backend.git
cd tu-repositorio-backend
