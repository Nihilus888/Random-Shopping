//require dotenv file to encode password
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const port = 3000

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.odxzs.mongodb.net`

const pageController = require('./controller/pages/page_controller')
const userController = require('./controller/users/users_controller')

//set view engine
app.set('view engine', 'ejs')

// Apply middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true , maxAge: 6000000}
  }))

//render home page that is not logged in
app.get('/', pageController.showHome)
app.get('/Signin', pageController.showSignIn)
app.get('/Signup', pageController.showSignUp)
app.post('/Signup', userController.signUp)

//wishlist page
app.get('/Wishlist', (req, res) => {
    res.render('wishlist')
})

//update wishlist page
app.get('/Update', (req, res) => {
    res.render('update')
})


//listening on port 
app.listen(port, async () => {
    try {
        await mongoose.connect(connStr, { dbName: 'RandomShop'})
    } catch(err) {
        console.log(err)
        console.log(`Failed to connect to DB`)
        process.exit(1)
    }
    console.log('Connected to DB')
    console.log(`Example app listening on port ${port}`)
})