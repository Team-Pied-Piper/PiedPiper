//Importo mi herramienta express
const express = require('express')

//Crear un enrutador, rutas (metodo necesita (); )
const router = express.Router();

//Traigo los productos del repositorio (ruta del controlador) -> servicio
const {getProducts, newProduct} = require("../controllers/productsController")

//Ruta para obtener productos (GET)
router.route('/productos').get(getProducts);

//Ruta creacion de un nuevo producto (POST)
router.route('/productos/nuevo').post(newProduct);

//para que se visualize desde afuera
module.exports=router
