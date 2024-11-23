
import { Router } from 'express';
import { CartManager } from '../mannagers/cartMannager.js';

const router = Router();
const cartManager = new CartManager();

// Crear un nuevo carrito
router.post('/', (req, res) => {
    try {
        const newCart = {
            id: cartManager.generateUniqueId(),
            products: []
        }

        cartManager.addCart(newCart)
        res.status(201).json(newCart)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}) 

export default router
