//Objeto Mongoose para requirir queries
const mongoose = require('mongoose');

//Metodo para conectar a DB
//Permisos para generar transferencia de datos
const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewURLParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro conectar con la base de datos`)
    })
}

//Utilizar la conexion -> Llamar la BD
module.exports=connectDatabase;

