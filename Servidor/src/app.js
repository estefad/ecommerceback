//inicializar config del backend - comando: npm run dev para iniciar y guardar servidor
import express from "express"
import userRoutes from './router/user.router.js'
import productsRoutes from './router/products.router.js'
import cartRoutes from './router/cart.router.js'

//inicializar y ejecutar express
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/index', express.static("public")) //utilizar archivos html, css 


app.use((req, res, next)=>{
    console.log("ruta a nivel app ejecutandose")
    next()//una vez que se ejecuta, sale de la func y continua con el resto de los endpoint
})

app.use("/api/users", userRoutes)
app.use("/api/products", productsRoutes)
app.use("/api/cart", cartRoutes)

app.get('/test', (req, res) => {
    res.send('¡La ruta de prueba está funcionando!');
});

app.use((err,req, res, next)=>{
    console.log(err.stack)
    res.status(500).send("error")
    
 })


const PORT = 8080 //puerto dinamico
//el puerto que usamos es para asegurarnos que no se este usando
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})

 


//socket - npm i socket.io
/*
import {Server}"socket.io"

const httpServer= app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})


const io = new Server(httpServer)


//por cada navegador que este solicitando conexion, se imprime nuevo...

io.on("connection", (socket)=>{
    console.log(`nuevo cliente conectado ${socket.id}`)

    //recibir event en el servidor
    socket.on("message", (data)=>{
        console.log(data)
    })
})

cliente:

app.get("/", (req, res)=>{
    res.render("index")
})
//crear index.handlebars


agregar js a la carpeta public y a index.hand..

<script src="/socket.io/socket.io.js"></script>
<script src="/js/index.js"></script>

en index.js - config el socket del lado del cliente
const socket = io(); //ref a la libreria

//enviar evento al servidor deben coincidir los nombre message de ambos lados
socket.emit("message", "hola desde el front")



//config server para mandar info a los clientes , individual, todos menos uno, todos
//individual
socket.emit("sock-individual", "solo para uno")

//todos menos el client actual
socket.broadcast.emit("sock-excluye-actual", "para todos menos el actual")

//todos - io es el socket completo para todos
io.emit("sock-todos", "para todos")

//del lado del cliente

//individual
socket.on("sock-individual", (data)=>{
    console.log(data)
})

//todos menos el actual
socket.on("sock-excluye-actual", (data)=>{
    console.log(data)
})

//todos
socket.on("sock-todos", (data)=>{
    console.log(data)
})













//que se puedan ver los productos en tiempo real a medida que se agregan
//servidor

let products = []
io.on("connection", (socket)=>{
    //mandar productos nuevos al cliente que se conecto
    socket.on("product", (data)=>{
        products.push(data)

    //mandar todos los productos al cliente que se conecto
        io.emit("products", products)
})



//cliente index.js
socket.emit("product ", product)
socket.on("products", (data)=>{
    console.log(data)
})

///////////


//chat con websocket
//servidor

   
*/









