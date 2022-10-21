//Aqui defino que productos incluyo en la aplicacion
//Objeto para utilizar la libreria express (metodos)
const express = require('express');
//Objeto app (copia de express)
const app = express();

//La aplicacion va a uilitizar JSON
app.use(express.json());


//Importar rutas
const productos = require("./routes/products")

//Pagina principal
app.use('/api',productos)

//modulo para poder utilizar la clase app.js en otros lados (exportable)
module.exports = app


