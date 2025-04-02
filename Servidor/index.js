//procces es un objeto global
//process.env
//traer las var de entorno en la carpeta config en archivo index.js

//commander es un modulo que nos permite crear comandos en la terminal
console.log(process.argv)

import { Command } from "commander"

const program = new Command()

program
  .option('--mode <mode>', "modo de trabajo", "production")
  .parse()

  console.log(program.opts())



//listener de procces
process.on("exit", () => {
  console.log("inicio de proceso")
  
  console.log("proceso terminado")
})//.on detecta que esta pasando en el proceso


  //que es option: es un metodo que nos permite crear opciones
  //que es -d: es el nombre corto de la opcion
    //que es --debug: es el nombre largo de la opcion
    //que es output extra debugging: es la descripcion de la opcion
  //que es flag: es un valor booleano que nos indica si la opcion fue seleccionada o no


  //hilo de ejecucion de javascript  tiene un solo hilo de ejecucion-single thread

  //child process que es un modulo que nos permite crear procesos hijos
  //ventajas de los procesos hijos
    //no bloquean el hilo principal
    //se pueden comunicar con el hilo principal
    //se pueden comunicar entre ellos
    //se pueden crear tantos procesos hijos como se necesiten

    //tdd test driven development
    //es una forma de desarrollo de software que se enfoca en escribir pruebas antes de escribir el codigo
    //ejemplo: una funcion que suma n numeros y devuelve el resultado y un mensaje
    //test: debe devolver un mensaje de error si no se envian numeros
    
    function suma(...num){
       //se suman n num

        let resultado = 0
        for(let i = 0; i < num.length; i++){
            resultado += num[i]
        }
        return {
            resultado: resultado,
            mensaje: "suma exitosa"
        }
    }
let resultado = suma(1,2,3,4,5)
console.log(resultado)


    //spread operator  que hace que los argumentos se conviertan en un array

//mocks que son: objetos que simulan el comportamiento de objetos reales
//como usar: faker-js
//instalar faker-js 


//15/03 - optimizacion y versiones de paquetes
//optimizar el rendimiento del servidor => buenas practicas
/*utilizar func asiincronas para no bloquear el hilo principal, js corre en un solo hilo
evitar el uso de modulos sincronos, fs.readFileSync, fs.writeFileSync hace que el hilo principal se bloquee

evitar el uso de logs en produccion, console.log, console.error, console.warn
evitar el uso de variables globales, let, const, var

pm2 es un gestor de procesos para nodejs, permite administrar procesos de nodejs en produccion
para errores de servidor
reiniciar el servidor automaticamente si se cae 

uso de try catch para capturar errores
try{
  //codigo que puede lanzar un error
}
catch(error){
  //codigo que se ejecuta si se lanza un error
}

utilizar un proxy reverso para servir archivos estaticos, nginx, apache, caddy
que es proxy
es un intermediario entre el cliente y el servidor
se encarga de recibir las peticiones del cliente y enviarlas al servidor
y enviar la respuesta del servidor al cliente

COMPRESION

import compression from "express-compression"
app.use(compression()) o router.use(compression())
es un middleware que comprime las respuestas del servidor
para enviarlas al cliente

conviene usar gzip por el tiempo de carga, ya que brotli usa mas recursos del servidor

flujo de errores - como manejarlos
libreria de errores
middleware de errores

node version mannager
nvm - permite cambiar de version de nodejs facilmente
descargar nvm
instalar nvm

funciones sincronicas son bloqueantes
funciones asincronicas no bloquean el hilo principal

que son los loggers
son herramientas que nos permiten registrar informacion de la aplicacion



cluster
es un modulo que nos permite crear un cluster de procesos hijos
para aprovechar los nucleos del procesador
para crear un cluster de procesos hijos

render.com
es un servicio de renderizado de aplicaciones web
video para descargar docker en windows 10

que es docker
es una plataforma de contenedores que permite empaquetar aplicaciones en contenedores


crear proyecto simple:
crear un proyecto de nodejs
npm init -y
instalar express: npm i express
npm i nodemon -D

crear gitgnore con node_modules/

crear un archivo index.js
crear un servidor de express



ENTREGA: USANDO FAKER
Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.
Mover el endpoint “/mockingproducts” (Desarrollado en el primer Desafío Entregable) dentro de este router.
Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. Dichos usuarios generados deberán tener las siguientes características:

En “password” debe tener la contraseña “coder123” encriptada.
“role” puede variar entre “user” y “admin”.
“products” debe ir como array vacío.
Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado “/mockingusers”, 
y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.
Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba 
los parámetros numéricos “users” y “products” para generar e insertar en la base de datos la cantidad 
de registros indicados.
Comprobar dichos registros insertados mediante los servicios GET de users y products

hacer codigo de  ejemplo de lo que se pide
javascript
const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Asegúrate de tener un modelo de usuario definido

// Generar un usuario falso
const generateUser = () => {
  const password = bcrypt.hashSync('coder123', 10);
  const role = faker.random.arrayElement(['user', 'admin']);
  const products = [];
  return {
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password,
  role,
  products
  };
}


// Endpoint para generar 50 usuarios falsos
router.get('/mockingusers', (req, res) => {
  const users = Array(50).fill().map(generateUser);
  res.json(users);
  });


// Endpoint para generar datos en la base de datos
router.post('/generateData', (req, res) => {
  const { users, products } = req.body;
  const userPromises = Array(users).fill().map(generateUser);
  const productPromises = Array(products).fill().map(() => {
    const product = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      stock: faker.random.numeric(2),
    };
    return Product.create(product);
  }
  );
  Promise.all(userPromises).then((users) => {
    res.json({ message: 'Datos generados e insertados', users });
  }
  ).catch((error) => {
    res.status(500).json({ error: 'Error al insertar datos' });
  }
  );


*/

