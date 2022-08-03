const { default: mongoose } = require('mongoose')
const wishlistModel = require('../../models/wishlist/wishlist')
const wishlistValidators = require('../validators/wishlist')
const wishList = require('../validators/wishlist')

const wishListcontroller = {

    createWishList: async (req, res) => {
        // check if the create wishlist fulfills data schema validation
        const validationResults = wishlistValidators.createWishList.validate(req.body)
        console.log(req.body)
        console.log(validationResults)

        //if does not fulfill data schema validation, throw out error
        if (validationResults.error) {
            console.log(validationResults.error)
            res.send(validationResults.error)
            return
        }
        
        // get the value of the wishlist which has been verified
        const validatedResults = validationResults.value
        console.log(validatedResults)

        // create the model with the validation data schema or return error
        try {
            await wishlistModel.create(validatedResults)
        } catch(err) {
            console.log(err)
        }

        // redirect to wishlist page after updating
        console.log('create wishlist successful')
        res.redirect('/wishlist')
    },

    deleteWishList: async (req, res) => {

        //get the object id or name of the product
        const product = await wishList.find().exec()
        //compare it to the object id in the DB
        const productInDB = await wishList.findById(req.params.productName)

        //if it is in the DB, delete from DB
        if (product === productInDB) {
            mongoose.wishlistModel.find(productInDB).remove().exec()
        }     
    },

    listWishlist: async (req, res) => {
        //find all the wishlist stored in the DB
        const wishList = await wishlistModel.find().exec()
        console.log(wishList)

        //render out the wishlist in the wishlist page
        res.render('loggedIn/wishlist', {wishList})
    },

}

module.exports = wishListcontroller