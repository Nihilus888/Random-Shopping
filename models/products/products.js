const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    expectedDelivery: {
        type: Number
    },

    country: {
        type: String
    }
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product