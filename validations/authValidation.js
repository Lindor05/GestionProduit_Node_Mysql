import Joi from "joi";

export const registerSchema = Joi.object({
    name:
        Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
                'string.base': 'Username must be a string',
                'string.empty': 'Username cannot be empty',
                'string.min': 'Username should have a minimum length of 3',
                'string.max': 'Username should have a maximum length of 30',
            })
        ,
    email:
        Joi.string()
        .email()
        .required(),
    password: 
        Joi.string()
        .min(6)
        .required()
});