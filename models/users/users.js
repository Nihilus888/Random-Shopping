const mongoose = require('mongoose')

//data validation for username and password for incoming 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    hash: {
        type: String,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User