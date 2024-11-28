import app from "./core/app.js";


const PORT = process.env.PORT


// Inicialización del Servidor
app.listen(PORT, () => {
    
    console.log(`\n✅  Backend Running Port ${PORT}\n`)
    
})

