import prisma from '../models/database.js'
import { Generate_Token } from '../utils/jwt.js'

import bcrypt from 'bcryptjs'



// Create_User(): Función para registrar un usuario
export const Create_User = async (req, res) => {
    
    const { name, email, type, password } = req.body;

    try {
        // Verifica que los datos sean válidos
        if (!name || !email || !type || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Crea el usuario
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { name, email, type, password: hashedPassword },
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Login_User(): Función para autenticar un usuario
export const Login_User = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        
        const user = await prisma.user.findUnique({ where: { email } });
        
        if (!user) return res.status(404).json({ error: '⛔ Usuario No Encontrado' });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).json({ error: '⛔️ Credenciales Inválidas' });

        const token = Generate_Token(user);
        
        res.status(200).json({ token });
        
    } catch (error) {
        
        res.status(500).json({ error: error.message });
        
    }
    
};



// Get_User(): Función para mostrar las propiedades del Usuario
export const Get_User = async (req, res) => {

    const { id } = req.params
    
    try {
        
        const user = await prisma.user.findUnique({ where: { id: parseInt(id, 10) }, });
        
        res.status(200).json({ user });
        
    } catch (error) {
        
        res.status(500).json({ error: error.message });
        
    }
    
};

// Get_All_Users(): Función para mostrar todos los usuarios
export const Get_All_Users = async (req, res) => {
    
    try {
        
        const users = await prisma.user.findMany({
            select: { id: true, name: true, email: true, type: true }, // Selecciona los campos que quieres devolver
        });
        
        res.status(200).json({ users });
        
    } catch (error) {
        
        res.status(500).json({ error: error.message });
        
    }
}



// Update_User(): Función para editar los valores de un usuario
export const Update_User = async (req, res) => {
    
    const { id } = req.params
    const { name, email, type } = req.body;

    try {
        const user = await prisma.user.update({
            where: { id: parseInt(id, 10) },
            data: { name, email, type },
        });

        res.status(200).json({ message: '✅ El Usuario ha sido Actualizado Correctamente', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// Delete_User(): Función para eliminar recursos
export const Delete_User = async (req, res) => {
    
    const { id } = req.params

    try {
        await prisma.user.delete({
            where: { id: parseInt(id, 10) },
        });

        res.status(200).json({ message: `✅ El Usuario: ${ id } ha sido Eliminado` });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}