//Registro todos los controllers referente a los Productos
//Cuando alguien ejecute un get salga un mensaje
//export = obtener algo
//req = request
//res = responds
//next = una accion siguiente

//Primer GetMapping con js
exports.getProducts=(req,res,next) => {
    res.status(200).json({
        sucess:true,
        message: "En esta ruta ud va a poder ver todos los productos"
    })
}