//inicializar config del backend - comando: npm run dev para iniciar y guardar servidor
import express from "express"
import userRoutes from './Router/user.router.js'
import productsRoutes from './Router/products.router.js'
import cartRoutes from './Router/cart.router.js'

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

 


// PRIMERA ENTREGA: 
/*
servidor basado en node y express y que este en el puerto 8080
dos rutas: /products y /carts

*/











































//endpoint - punto de entrada donde el cliente solicita info al servidor ejemplo: /saludo, /usuarios, etc
//cada ruta se llama endpoint
//metodo get - peticion a la ruta

/* app.get('/', (req, res) => {
    //responder al cliente en /=rura raiz
     res.send("Mi primer servidor con express")

 })

 app.get("/saludo", (req, res)=>{
     res.send("Hola te estoy saludando")
})

 app.get("/bienvenida", (req, res)=>{
    res.send(`<h1>MI PRIMER SERVIDOR!!!</h1>`)
 })

 app.get("/usuario", (req, res)=>{
     const user = {
         name: "juan",
         edad: 30,
         correo: "juan@mail.com"
     } 
     res.send(user)  
 })



//req.body
//que hacen

 //req.params - obtener elem dinamicos con : exp reconoce que es un elem dinamico que ingressa el cliente
 app.get("/parametros/:data", (req, res)=>{
     const parametros = req.params.data

    res.send(`El dato ingresado por el cliente es: ${parametros}`)
})

app.get("/parametros/:nombre/:apellido", (req, res)=>{
    const nombre = req.params.nombre
    const apellido = req.params.apellido

    res.send(`El nombre completo es: ${nombre} ${apellido}`)
})



const usuarios =[
    {id:1, nombre:"juan", edad:30},
    {id:2, nombre:"pedro", edad:25},
    {id:3, nombre:"maria", edad:35}
]

//todos los parametros por defecto son de tipo string
 app.get("/usuarios/:id", (req,res)=>{
     const { id } = req.params
    const user = usuarios.find(usuario => usuario.id === Number(id))
    if(!user)return res.send(`no existe el usuario con id ${id}`)

     res.send(user) 
 })

//req.query ? http://localhost:8080/queries?nombre=Estefania simple
 //req.query ? http://localhost:8080/queries?nombre=Estefania&apellido=perez - concatenar
 //obtener datos de la url
 //usando ? el servidor sabe que estoy (como cliente) enviando una query / consulta

 app.get("/queries", (req,res)=>{
     const { nombre, apellido } = req.query
    if(!nombre || !apellido)return res.send("debe ingresar un nombre y apellido por querie")

     res.send(`el nombre ingresado es ${nombre} ${apellido}`)
 })

 const usuarios2 = [
     {id:1, nombre:"juan", edad:30, genero: "m"},
     {id:2, nombre:"pedro", edad:25, genero: "m"},
     {id:3, nombre:"maria", edad:35, genero: "f"}

 ]
 //filtrado con querie del lado del cliente
 app.get("/usuarios2", (req,res)=>{
     const { genero } = req.query
    if(!genero || (genero !== "m" && genero !== "f"))return res.send(usuarios2)
    const users = usuarios2.filter(usuario => usuario.genero === genero)

    res.send(users)
 })
*/


//EXPRESS AVANZADO
//codigos de estado http - estado del proceso de una peticion, como inicia y como acaba
//metodos de peticion

