//require dotenv file to encode password
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const methodOverride = require('method-override')

const app = express()
const port = 3000

const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.odxzs.mongodb.net`

const pageController = require('./controller/pages/page_controller')
const userController = require('./controller/users/users_controller')
const authorization = require('./middleware/authorization')
const { createWishList, listWishlist, editWishList } = require('./controller/wishlist/wishlist_controller')
const { updateWishList } = require('./controller/validators/wishlist')
const wishlistValidators = require('./controller/validators/wishlist')
const controller = require('./controller/wishlist/wishlist_controller')
const wishListcontroller = require('./controller/wishlist/wishlist_controller')

//set view engine
app.set('view engine', 'ejs')

// Apply middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false, maxAge: 9000000}
  }))

//render home page that is not logged in
app.get('/', pageController.showHome)
app.get('/Signup', pageController.showSignUp)
app.get('/Signin', pageController.showSignIn)

// Use post method when user signs up
app.post('/Signup', userController.signUp)

// Use post method when user sign in
app.post('/Signin', userController.login)

//Get home loggedin page
app.get('/Home', authorization.Authenticated, (req, res) => {
    res.render('loggedIn/home')
})

//wishlist page
app.get('/wishlist', authorization.Authenticated, wishListcontroller.listWishlist)

//update wishlist page
app.get('/update', authorization.Authenticated, (req, res) => {
    res.render('loggedIn/Update')
})

//post request to create wishlist
app.post('/update', authorization.Authenticated, wishListcontroller.createWishList)

//Edit wishlist page
app.get('/edit/:productId', authorization.Authenticated, wishListcontroller.getEditWishList)

//put request to edit product details
app.put('/edit/:productId', authorization.Authenticated, wishListcontroller.editWishList)

//show product page by product id 
app.get('/show/:productId', authorization.Authenticated, wishListcontroller.getWishList)

//delete a certain wishlist ()
app.delete('/delete/:product_id', authorization.Authenticated, wishListcontroller.deleteWishList)

//logout route rely on params to delete resource, example: req.params.id, whether document owner is request owner)
app.delete('/logout', authorization.Authenticated, userController.logout)

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