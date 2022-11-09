//Registro todos los controllers referente a los Productos
//Cuando alguien ejecute un get salga un mensaje
//export = obtener algo
//req = request
//res = responds
//next = una accion siguiente

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


//Primer GetMapping con js
//Ver la lista de productos(GET)
exports.getProducts= catchAsyncErrors(async(req,res,next) => {

    const productos = await producto.find(); // Traigo todos los productos

    //Error si no lo encuentra
    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrada", 404))
    }

    res.status(200).json({
        sucess:true,
        count : productos.length,
        productos
        //message: "En esta ruta ud va a poder ver todos los productos"
    })
})

//Consulta de un objeto por id

exports.getProductById= catchAsyncErrors( async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return next(new ErrorHandler("Producto no encontrado", 404))
        }
    
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})


//Metodo para crear un Nuevo Producto(Promesa) /api/productos
// async = esperar la respuesta
//Objeto para traer el esquema (POST)
const producto = require('../models/productos');


exports.newProduct=catchAsyncErrors(async(req,res,next) => {

    req.body.user = req.user.id;

    const product = await producto.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })
})

//Modificar un producto
exports.updateProduct =catchAsyncErrors( async(req,res,next) => {
    //Variable tipo modificable let
    let product = await producto.findById(req.params.id)
    
    //Verifico si el objeto no existe para finalizar el proceso
    if(!product){
            return next(new ErrorHandler("Producto no encontrado", 404))
    }

    //Si el producto si existia, entonces si ejecuto la actualizacion
    product = await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true, //Valido solo los articulos nuevos o actualizados
        runValidators:true
    });

    //Respondo OK si el producto se ejecuto
    res.status(200).json({
        sucess:true,
        message:"Producto actualizado correctamente",
        product
    })
})

//Eliminar un Producto
exports.deleteProduct =catchAsyncErrors(async(req,res,next) => {
    //const el objeto no es modificable
    const product = await producto.findById(req.params.id)
    
    //Verifico si el objeto no existe para finalizar el proceso
    if(!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    //Eliminamos el producto
    await product.remove();
    res.status(200).json({
        sucess:true,
        message:"Producto removido correctamente"
    })
})


//FETCH
const fetch = (url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require
// ** Ver todos los productos **
function verProductos(){
    fetch('http://localhost:4000/api/productos').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.error(err))
}

//verProductos(); Ejecutamos el metodo

// ** Ver por id **
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.error(err))
}

//verProductoPorID("6354c48b888a6437cc507b88"); Probamos el metodo con un id