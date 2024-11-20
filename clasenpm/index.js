const moment = require('moment')

const hoy = moment()
console.log(`la fecha de hoy es: ${hoy}`)

console.log(hoy.format("MMM Do YYYY, h:mm a"))

console.log(moment("1991-11-10", "YYYY-MM-DD"))

//calcular difrencia con los dias que pasasron desde una fecha a hoy


console.log("han pasado:",hoy.diff(moment("2000-1-1", "YYYY-MM-DD"), "days"))


//como usar fs SINCRONO
const fs = require('fs');

fs.writeFileSync('archivo.txt', 'hola mundoooooooo')
//dos param, el archivo.txt, "el contenido"


//para que mi info se guarde, uso npm init -y y puedo usar el modulo fs
//writeFileSync - escribir contenido en un rachivo
//readFileSync - 
//appendFileSync


let mensaje = fs.readFileSync("./archivo.txt", "utf-8")
//utf-8 es un tipo de codificacion para leer el archivo
console.log(`mensaje: ${mensaje}`)

//append- modificarc o agregar
fs.appendFileSync("./archivo.txt", " bienvenido a modulos")


//unlink - eliminar el archivo
//fs.unlinkSync("./archivo.txt")




//como usar fs ASINCRONO
 const filePtah = "./archivo.txt"
 const fetchData = async () => {
    try {
        await fs.promises.writeFile(filePtah, "mi mensaje")

        let mensaje = await fs.promises.readFile(filePtah, "utf-8")
        console.log(mensaje)

    } catch (err) {
        console.log(err)
    }
    
 }

 fetchData()


