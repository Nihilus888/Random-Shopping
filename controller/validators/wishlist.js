const Joi = require('joi')

const wishlistValidators = {
    updateWishList: Joi.object({
        name: Joi.string().min(5).required(),
        price: Joi.string.min(1).required(),
        expectedDays: Joi.number.integer().min(1),
        country: Joi.string().min(4)
    })
}

module.exports = wishlistValidators