import express from 'express';
import { Create_User, Login_User, Get_User, Get_All_Users, Delete_User, Update_User } from '../controllers/users.js'
import { authenticate } from '../middlewares/auth.js';


const router = express.Router();

router.get('/', authenticate, Get_All_Users); // Obtiene todos los Usuarios
router.get('/:id', authenticate, Get_User ); // Obtiene la Información de 1 Usuario
router.post('/register', authenticate, Create_User ); // Registra un Usuario Nuevo
router.put('/:id', authenticate, Update_User); // Editar usuario por ID




router.delete('/:id', authenticate, Delete_User); // Eliminar usuario por ID



router.post('/login', Login_User );

export default router