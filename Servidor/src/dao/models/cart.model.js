import mongoose from "mongoose"

const cartCollection = "cart"
const cartSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
            quantity: { type: Number, default: 1 }
        }
    ]
})

const Cart = mongoose.model('cart', cartSchema)

export default Cart
