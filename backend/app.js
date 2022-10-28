//Aqui defino que productos incluyo en la aplicacion
//Objeto para utilizar la libreria express (metodos)
const express = require('express');
//Objeto app (copia de express)
const app = express();
//Implementar el capturador de errores
const errorMiddleware = require("./middleware/errors")

//La aplicacion va a uilitizar JSON
app.use(express.json());


//Importar rutas
const productos = require("./routes/products")
const usuarios = require("./routes/auth")

app.use('/api',productos) //Pagina principal
app.use('/api',usuarios)


//MiddleWares para manejar errores
app.use(errorMiddleware)

//modulo para poder utilizar la clase app.js en otros lados (exportable)
module.exports = app


