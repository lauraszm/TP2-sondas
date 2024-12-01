import Joi from "joi";

export const validateSonda = (sonda) => {
    const sondaSchema = Joi.object({
        id: Joi.number().min(1).max(5),
        temperatura: Joi.number().min(-20).max(100)
    })

    const { error } = sondaSchema.validate(sonda)
    const result = {
        error: error ? true : false,
        errorMessage: error ? error.details[0].message : null
    }
    return result
}

export const validateId = (id) => {
    const sondaSchema = Joi.number().min(1).max(5)
    const { error } = sondaSchema.validate(id)
    const result = {
        error: error ? true : false,
        errorMessage: error ? "Número de sonda incorrecto" : null
    }
    return result
}