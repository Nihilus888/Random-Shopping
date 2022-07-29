const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.odxzs.mongodb.net/test`

const pageController = require('./controller/pages/page_controller')

//set view engine
app.set('view engine', 'ejs')

// Apply middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//render home page that is not logged in
app.get('/', pageController.showHome)
app.get('/Signin', pageController.showSignIn)
app.get('/Signup', pageController.showSignUp)

//wishlist page
app.get('/Wishlist', (req, res) => {
    res.render('wishlist')
})

//update wishlist page
app.get('/Update', (req, res) => {
    res.render('Update')
})


//listening on port
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
})