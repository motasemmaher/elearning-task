const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)


const idSchema = Joi.object({
    _id: Joi.objectId().required()
})


module.exports = {
    idValidations: idSchema
};