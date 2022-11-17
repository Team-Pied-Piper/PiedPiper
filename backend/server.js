//Utilizamos el server.js para arrancar el servidor
//llamo la clase app.js
const app = require("./app")

const cloudinary = require("cloudinary")//Cloudinary

//Configurar el archivo de configuracion
//Traer la libreria dot
const dotenv = require('dotenv')
dotenv.config({path: 'backend/config/config.env'})
//path archivo de configuracion

//Crear y llamar el servidor
//Me regresa un mensaje en pantalla, utilizando el archivo config.env
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

//Configurar dase de datos
const connectDatabase = require("./config/database")
connectDatabase();

//Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
}) 