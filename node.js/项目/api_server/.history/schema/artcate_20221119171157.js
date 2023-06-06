const joi = require('joi')

const name = joi.string().required()
const alias = joi.string().alphanum().required()

exports.addcate_schema = {
    body: {
        name,
        alias
    }
}