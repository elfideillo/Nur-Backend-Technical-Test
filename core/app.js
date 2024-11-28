// Dependencias
import express from "express";
import cors from 'cors'

// Configuración
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Importación de Rutas
import user_routes from '../routes/users.js'


// Implementación de Rutas
app.use('/api/v1/users', user_routes )





export default app