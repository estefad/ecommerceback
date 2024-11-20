import { Router } from "express"
import {productManager} from'../mannagers/productsMannager.js'

const router = Router()

const productMannager = new productManager()


router.get("/", async (req,res)=>{
    const {limit} = req.query
    try {
        const products = await productMannager.getProducts()
        res.send(products)
        
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
    
})


router.get("/:pid", async (req,res)=>{
    const {pid} = req.params
    try {
        const product = await productMannager.getProductById(pid)
        console.log(product)
        
        res.send(product)

    }catch (err){
        console.log(err)
        res.send(err.message)
    }
})

//cargar producto
router.post("/", async (req,res)=>{
    const body = req.body
    try {
        const product = await productMannager.addProduct(body)
        
        res.send(product)

    }catch (err){
        console.log(err)
        res.send(err.message)
    }
})

router.post("/:pid", async (req,res)=>{
    const {pid} = req.params
    const body = req.body
    try {
        const product = await productMannager.updateProduct(pid, body)
        
        res.send(product)

    }catch (err){
        console.log(err)
        res.send(err.message)
    }
})

router.delete("/:pid", async (req,res)=>{
    const {pid} = req.params
    
    try {
        const product = await productMannager.deleteProduct(pid)
        
        res.send(product)

    }catch (err){
        console.log(err)
        res.send(err.message)
    }
})



export default router