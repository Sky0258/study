const joi = require('joi')

const name = joi.string().required()
const alias = joi.string().alphanum().required()

const id = joi.number().integer().min(1).required()

exports.addcate_schema = {
    body: {
        name,
        alias
    }
}

exports.deleteCate_schema = {
    body: {
        id
    }
}