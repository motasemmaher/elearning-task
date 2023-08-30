const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)


const schema = Joi.object({
    _id: Joi.objectId()
        .alter({
            update: (schema) => schema.required(),
            create: (schema) => schema.forbidden()
        }),

    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .min(3)
        .max(1000),
    
    tagsId: Joi.array()
        .items(Joi.objectId())
        .required()
}).options({abortEarly: false});


module.exports = schema;