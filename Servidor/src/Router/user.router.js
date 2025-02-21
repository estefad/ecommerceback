import { Router } from "express"
import passport from "passport"
import { validateDto } from '../dao/middlewares/validateDto.middleware.js'
import userDto from '../dtos/user.dto.js'
import { AuthController } from '../controller/auth.controller.js'
import { checkId } from "../dao/middlewares/checkId.middleware.js"

const router = Router()

router.use((req, res, next) => {
    console.log("se ejecuta endpoint de user")
    next()
})

router.get("/:id", checkId, (req, res) => {
    res.json({ message: "endpoint de user" })
})

let users = []

router.get("/", (req, res) => {
    res.status(200).send(users)
})

router.get("/:id", checkId, (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === Number(id))
    if (!user) return res.status(404).send("usuario no encontrado")

    res.status(200).send(user)
})

router.post("/", checkId, (req, res) => {
    const user = req.body;
    const newUser = {
        id: users.length + 1,
        ...user
    }

    users.push(newUser)

    res.status(201).send(users) // 201 porque se creó algo.
})

router.put("/:id", (req, res) => {
    const { id } = req.params
    const data = req.body
    
    const userIndex = users.findIndex(user => user.id === Number(id));
    if (userIndex === -1) return res.status(404).send("usuario no encontrado")
    
    users[userIndex] = {
        ...users[userIndex],
        ...data
    }

    res.status(200).send(users[userIndex])
})

router.delete("/:id", (req, res) => {
    const { id } = req.params

    const user = users.find(user => user.id === Number(id))
    if (!user) return res.status(404).send("usuario no encontrado")
    
    users = users.filter(user => user.id !== Number(id))
    
    res.status(200).send("user deleted")
})

// Ruta de registro con validación DTO
router.post('/register', validateDto(userDto), (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.status(400).json({ message: info.message })
        }
        req.user = user
        AuthController.register(req, res)
    })(req, res, next)
})

export default router
