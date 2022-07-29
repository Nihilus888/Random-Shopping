const mongoose = require('mongoose')

const connStr = "mongodb+srv://Nihilus888:arytelpica888@cluster0.d73ns.mongodb.net/?retryWrites=true&w=majority"
const DB = mongoose.connect(connStr, { dbName: 'RandomShop'})

module.exports = DB