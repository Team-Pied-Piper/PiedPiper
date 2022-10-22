//Modulo de Porductos

//Creo el objeto para conectar a mi BD
const mongoose = require('mongoose');

//Crear un esquema (design of products)
const productosSchema = mongoose.Schema({
    nombre:{
        type : String,
        required: [true, "Por favor registre el nombre del producto"],
        //Eliminar caracteres blancos
        trim : true,
        maxLength: [120, "El nombre del producto no debe exceder los 120 caracteres"]
    },

    precio:{
        type : Number,
        required: [true, "Por favor registre el precio del producto "],
        maxLength: [8, "El precio del producto no puede estar por encima de 99'000.000"],
        //Valor por default
        default : 0.0
    },

    descripcion : {
        type:String,
        required:[true,"Por favor registre la descripcion del producto"]
    },

    calificacion:{
        type:Number,
        default: 0
    },

    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],

    categoria: {
        type:String,
        required:[true,"Por favor seleccione la categoria del producto"],
        enum:{
            values:[
                "Básicos",
                "Sueter|Buzos",
                "Chaquetas",
                "Jeans",
                "Zapatos",
                "Accesorios"
            ]
        }
    },

    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor del producto"]
    },

    inventario:{
        type:Number,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[3,"Cantidad maxima del producto no puede sobrepasar 999"],
        default: 0
    },

    numCalificaciones: {
        type:Number,
        default:0,
    },

    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],

    FechaCreacion:{
        type:Date,
        default:Date.now
    }
})

//Utilizar la clase productos
module.exports=mongoose.model('productos',productosSchema)