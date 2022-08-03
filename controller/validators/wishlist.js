const Joi = require('joi')

const wishlistValidators = {
    createWishList: Joi.object({
        productName: Joi.string().min(2).required(),
        price: Joi.string().min(1).required(),
        expectedDelivery: Joi.number().integer().min(1),
        country: Joi.string().min(3)
    })
}

module.exports = wishlistValidators