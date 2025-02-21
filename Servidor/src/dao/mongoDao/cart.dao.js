import  Cart  from "../models/cart.model.js"

class CartDao {
    async getAll() {
        return await Cart.find()
    }

    async getById(id) {
        return await Cart.findById(id).populate('products.product').exec()
        //exec(): Ejecuta la consulta
    }

    async create(data) {
        return await Cart.create(data)
    }

    async update(id, data) {
        return await Cart.findByIdAndUpdate(id, data, { new: true }).populate('products.product').exec()
    }

    async delete(id) {
        return await Cart.findByIdAndDelete(id)
    }

    async deleteProductInCart(cid, pid) {
        const cart = await Cart.findById(cid)
        if (!cart) {
            throw new Error('Carrito no encontrado')
        }

        cart.products = cart.products.filter(p => p.product.toString() !== pid)
        await cart.save()
        return cart
    }
}

export const cartDao = new CartDao()
