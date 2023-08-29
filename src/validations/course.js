const Joi = require('joi');


const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .min(3)
        .max(1000)
})


module.exports = schema;