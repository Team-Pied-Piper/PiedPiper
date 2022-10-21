//Importo mi herramienta express
const express = require('express')

//Crear un enrutador, rutas (metodo necesita (); )
const router = express.Router();

//Traigo los productos del repositorio (ruta del controlador) -> servicio
const {getProducts} = require("../controllers/productsController")

//ruta para obtener productos 
router.route('/productos').get(getProducts)

//para que se visualize desde afuera
module.exports=router
