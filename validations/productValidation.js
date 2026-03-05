import Joi from "joi"

export const productSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(100)
        .required(),
    price: Joi.number()
        .positive()
        .precision(2)
        .required(),
    category_Id: Joi.number()
        .integer()
        .positive()
        .required(),
})