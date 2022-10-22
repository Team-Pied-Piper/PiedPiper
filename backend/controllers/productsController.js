//Registro todos los controllers referente a los Productos
//Cuando alguien ejecute un get salga un mensaje
//export = obtener algo
//req = request
//res = responds
//next = una accion siguiente

//Primer GetMapping con js
//Ver la lista de productos(GET)
exports.getProducts=(req,res,next) => {
    res.status(200).json({
        sucess:true,
        message: "En esta ruta ud va a poder ver todos los productos"
    })
}

//Metodo para crear un Nuevo Producto(Promesa) /api/productos
// async = esperar la respuesta

//Objeto para traer el esquema (POST)
const producto = require('../models/productos')

exports.newProduct=async(req,res,next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })
}
