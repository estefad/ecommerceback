import mongoose from "mongoose"
import dotenv from "dotenv"


export const connectMongoDB = async  () => {
    
// Cargar variables de entorno desde el archivo .env
dotenv.config({ path: "./.env" })
    mongoose.connect(process.env.MONGO_DB_URL)

    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err)); 
    
}




//PAGINACION CON MOONGOSE - usamos cuando tenemos mucha info que enviar al cliente
// export const getPaginado = async (collection, limite = 5, skip = 0
//     , filtro = {}) => {
//         const query = collection.find(filtro).skip(skip).limit(limite);
//         const total = await collection.countDocuments(filtro);
//         const data = await query.toArray();
//         return { total, data };
// }

//para que se usa la paginacion?
//1. cuando tenemos mucha info que enviar al cliente
//4. cuando queremos mostrar la info de manera paginada y dinamica

//paginacion con mongoose paginate v2
// export const getPaginado = async (collection, limit = 5, skip = 0
//     , filtro = {}) => {
//         const query = collection.paginate(filtro, { limit, skip });
//         return query;
// }
