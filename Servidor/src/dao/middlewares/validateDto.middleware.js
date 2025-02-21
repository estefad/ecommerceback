import joi from 'joi'


export function validateDto(dto) {
    return (req, res, next) => {
        console.log("Datos recibidos:", req.body)
        const { error } = dto.validate(req.body)
        if (error){
            console.log("Error de validación:", error.details)
            return res.status(400).json({ message: error.details[0].message })

        }
        next()
    }
}
