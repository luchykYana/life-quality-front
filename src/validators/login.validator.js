import Joi from 'joi';

export const LoginValidator = Joi.object({
    login: Joi.string()
        .min(5)
        .max(50)
        .trim()
        .required()
        .regex(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'))
        .messages({
            'string.empty': 'The email field is required',
            'string.min': 'The email must be at least 5 characters long',
            'string.max': 'The email must not exceed 50 characters',
            'string.pattern.base': 'The email must be with only Latin letters, numbers, and the characters: _.+-',
        }),

    password: Joi.string()
        .trim()
        .required()
        .regex(new RegExp(/^(?=.*[^a-z])(?=.*[^0-9])(?=.*[^A-Z])(?=.*[^!@#$%^&*])(?=.{8,128})/))
        .messages({
            'string.empty': 'The password field is required',
            'string.min': 'The password must be at least 8 characters long',
            'string.max': 'The password must not exceed 128 characters',
            'string.pattern.base': 'The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
        }),
});
