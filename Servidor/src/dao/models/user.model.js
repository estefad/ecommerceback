import { valid } from 'joi'
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
    role: { type: String, default: 'user', valid: ["admin", "user"] }
})

// Middleware de Mongoose para verificar el correo electrónico antes de guardar
userSchema.pre('save', function(next) {
    if (this.email.includes("@") && this.email.includes(".")) {
        return next()
    }
    next(new Error("Email is not valid"))
})

const User = mongoose.model('User', userSchema)

export default User
