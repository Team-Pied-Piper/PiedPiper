//Proteger nuestras rutas

const User = require("../models/auth")
const jwt = require("jsonwebtoken")
const ErrorHandler = require ("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Verificar si estamos utenticados, existencia y veracidad del token

exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next) => {
    const {token} = req.cookies

    if(!token){
        return next(new ErrorHandler("Inicie sesión para acceder a realizar la operación", 401))
    }
    const decoficated = jwt.decode(token, process.env.JWT_SECRET)
    req.user=await User.findById(decoficated.id);

    next()
})

//Capturamos role
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return next( new ErrorHandler (`Role (${req.user.role}) no esta autorizado a entrar a esta area`, 403))
        }
        next ()
    }
}