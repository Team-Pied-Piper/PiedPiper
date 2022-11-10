//Aqui defino que productos incluyo en la aplicacion
//Objeto para utilizar la libreria express (metodos)
const express = require('express');
//Objeto app (copia de express)
const app = express();
//Implementar el capturador de errores
const errorMiddleware = require("./middleware/errors")
const cookieParser = require("cookie-parser")


//La aplicacion va a uilitizar JSON - Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());


//Importar rutas
const productos = require("./routes/products")
const usuarios = require("./routes/auth")
const ordenes = require("./routes/orders")

app.use('/api',productos) //Pagina principal
app.use('/api',usuarios)
app.use('/api',ordenes)


//MiddleWares para manejar errores
app.use(errorMiddleware)

//modulo para poder utilizar la clase app.js en otros lados (exportable)
module.exports = app


