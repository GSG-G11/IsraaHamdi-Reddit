const Joi = require('joi');

const commentsSchema = Joi.object({
    description: Joi.string().required()
})

module.exports = commentsSchema;