//Importo mi herramienta express
const express = require('express')

//Crear un enrutador, rutas (metodo necesita (); )
const router = express.Router();

//Traigo los productos del repositorio (ruta del controlador) -> servicio
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController")

//Ruta para obtener productos (GET)
router.route('/productos').get(getProducts);

//Ruta para obtener producto por id (GET)
// :id -> se vuelve parte de la estructura del require
router.route('/producto/:id').get(getProductById);

//Ruta creacion de un nuevo producto (POST)
router.route('/productos/nuevo').post(newProduct);

//Ruta para actualizar un producto por id (PUT)
router.route('/producto/:id').put(updateProduct);

//Ruta para remover un producto por id (DELETE)
router.route('/producto/:id').delete(deleteProduct);

//para que se visualize desde afuera
module.exports=router
