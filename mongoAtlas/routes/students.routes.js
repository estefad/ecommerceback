import {Router} from "express"
import { studentModel } from "../models/students.model.js"

const router = Router()

router.get("/", async(req,res)=>{

    try {

        const students = await studentModel.find()

        res.send(students)

    } catch (error) {
        console.log(error)
    }
})

router.post("/", async(req,res)=>{

    try {
        const body = req.body

        const students = await studentModel.create(body)

        res.send(students)

    } catch (error) {
        console.log(error)
    }
})

export default router