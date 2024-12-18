import express from "express"
import { connectMongoDB } from "./mongo.config.js"
import studentsRoutes from "./routes/students.routes.js"

connectMongoDB();
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/students", studentsRoutes) 

const PORT = 8080 //puerto dinamico

const httpServer = app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})