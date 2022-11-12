//Importo mi herramienta express
const express = require('express')

//Crear un enrutador, rutas (metodo necesita (); )
const router = express.Router();

//Traigo los productos del repositorio (ruta del controlador) -> servicio
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct, createProductReview, getProductReviews, deleteReview} = require("../controllers/productsController");
const { isAuthenticatedUser , authorizeRoles} = require('../middleware/auth');


router.route('/productos').get(getProducts);//Ruta para obtener productos (GET)
router.route('/producto/:id').get(getProductById);//Ruta para obtener producto por id (GET) // :id -> se vuelve parte de la estructura del require
router.route('/productos/nuevo').post(isAuthenticatedUser, authorizeRoles('admin') ,newProduct);//Ruta creacion de un nuevo producto (POST)
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles('admin') ,updateProduct);//Ruta para actualizar un producto por id (PUT)
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles('admin') ,deleteProduct);//Ruta para remover un producto por id (DELETE)

router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

//para que se visualize desde afuera
module.exports=router;
