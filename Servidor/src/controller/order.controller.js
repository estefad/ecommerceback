import { v4 as uuidv4 } from 'uuid'
import Ticket from '../dao/models/ticket.model.js'
import Cart from '../dao/models/cart.model.js'
//import Product from '../dao/models/products.model.js'

export class OrderController {
    static async create(req, res) {
        try {
            const { 
                products: [{ id, quantity }],
                total: { total },
                user: { id: userId }
            } = req.body

            if (!userId) return res.status(400).json({ message: "User id is required" })

            const cart = await Cart.findById(id).populate('products.product')
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' })
            }

            let totalOrder = 0
            //control de stock
            for (const item of cart.products) {
                const product = item.product
                if (product.stock < item.quantity) {
                    return res.status(400).json({ message: `Insufficient stock for product ${product.name}` })
                }
                totalOrder += product.price * item.quantity
                product.stock -= item.quantity
                await product.save()
            }

            if (totalOrder !== total) return res.status(400).json({ message: "Total is incorrect" })

            // Crear el ticket 
            const ticket = new Ticket({
                ticketId: uuidv4(),
                total: totalOrder,
                user: userId
            })

            await ticket.save()
            cart.products = []
            await cart.save()

            res.status(200).json({ message: "Order successfully", ticket })
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error })
        }
    }
}
