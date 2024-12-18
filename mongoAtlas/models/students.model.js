import mongoose from "mongoose"

//definir el nombre de la coleccion
const studentColeccion = "students"
//seleccionamos la base a trabajar y si no existe, la creamos
//use("clase12")

//crear una coleccion
// db.createCollection("usuarios")

//definir esquema del doc
const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    dni: {
        type: String,
        unique: true //si mongo detecta que ya hay uno en la db, nos dice que ya hay uno registrado
    },
    course: String,
    note: Number  
    
})

//exportar el modelo para poder hacer CRUD info en la db
export const studentModel = mongoose.model(studentColeccion, studentSchema) //nombre de coleccion y estructura de esquema
