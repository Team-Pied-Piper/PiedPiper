const User = require("../models/auth")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp=CAU"
        }
    })


    const token = user.getJwtToken();


    res.status(201).json({
        success:true,
        token,
        user
    })
})

//Iniciar Sesion

exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const { email, password } = req.body;

    //Revisar si los campos estan completos
    if(!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & contraseña",400))
    }

    //Buscar el usuario en nuestra base de datos
    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next (ErrorHandler("Email o contrseña invalidos", 401))
    }

    //Comparar contraseñas, verificar si está bien
    const passwordOk = await user.comparePassword(password);

    if(!passwordOk){
        return next(new ErrorHandler("Contraseña invalida", 401))
    }

    const token = user.getJwtToken();


    res.status(201).json({
        success:true,
        token,
        user
    })

} )