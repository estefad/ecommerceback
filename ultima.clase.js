//que deberia agregar en mi proyecto
/*  
dependencias
-mongoose
-express
-joi
-dotenv
-morgan


carpeta SRC
-config
    -mongoDB.config.js
    -passport.config.js

-controller
    -auth.controller.js
    -order.controller.js
    -product.controller.js

-dao
    -models
        -user.model.js
        -products.model.js
        -cart.model.js

    -middleware
        -checkId.middleware.js
    
    -mongo.dao.js
        -cart.dao.js
        -products.dao.js


-mannagers
    -cart.manager.js
    -products.manager.js

-router
    -user.router.js
    -products.router.js
    -cart.router.js

-utils
    -hash.js
    -jwt.js

-services
    -products.service.js
    -order.service.js
    -user.service.js

-dto
    -order.dto.js
    -user.dto.js
    -products.dto.js

app.js



SMT - Simple Mail Transfer Protocol
SMTP Es un protocolo de aplicación simple, que se utiliza para enviar 
y recibir mensajes de correo electrónico a través de un servidor de correo electrónico.


NODE MAILER- es un módulo de Node.js que permite enviar correos electrónicos desde nuestra aplicación.
Para instalarlo: npm i nodemailer


envio de msjes a gmail con nodemailer


/config.js
export const CONFIG = {
    email: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}

/email.service.js
import  {creatreTransport} from 'nodemailer'

class EmailService {
    constructor() {
        this.transport = createTransport({
        host: CONFIG.email.host,
        port: CONFIG.email.port,
        auth: {
            user: CONFIG.email.user,
            pass: CONFIG.email.pass
    }
})

async getMessageTemplate({type, email}) {
    let message = `Hola ${email},`

    switch (type) {
        case 'welcome':
            message += 'Bienvenido a nuestra plataforma'
            break;
    }
    return message
} 


async sendEmail({to, subject, type)} {
    try {
        const message = await this.getMessageTemplate({type, email: to})

        const info = await this.transport.sendMail({
            from: CONFIG.email.user,
            to,
            subject,
            html: type,
            attachments: [{
                filename: 'logo.png',
                path: './logo.png',
                cid: 'logo' //id para mostrar en el cuerpo del mail
            }]
        })

        console.log('Message sent: %s', info.messageId)
        return info.messageId

    } catch (error) {
        throw error
    }

}

export const emailService = new EmailService()



//en el controller
import {emailService}
emailService.sendEmail({
    to: '
    subject: 'Bienvenido',
    type: 'welcome'
    })
    .then((messageId) => {
        console.log(messageId)
    })
    .catch((error) => {
        console.log(error)
    })
})


//en el app.js

import {emailService} from './services/email.service.js'

app.use(emailService.sendEmail({
to: '',
subject: 'Bienvenido',
type: 'welcome'
}))


 */


/*
ENTREGA FINAL
1- CONTROLLER SERVICIO Y MODELO
-DTOS middleware de validacion - Joi - 
- atenticacion con JWT esta en primera enbtrega

-implementar mailin con nodemailer cuando se registra el usuario

2-TICKET- LISTO!

-modelo(mongosse)y servicio de ordenes

ruta cart /:cid/purchase
verificar que el stock sea sufucuente para la compra 
(validacion en orden controller del carrito no es orden, es cart.controller)
sino hay stock devolver error

si existe el producto, generar ticket, el id de ticket se genera automatico
hora de ticket
total de compra
uaurio que compro -LISTO!

usar solo dao o solo servicios porque es lo mismo
*/