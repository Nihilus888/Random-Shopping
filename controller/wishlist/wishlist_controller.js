const { default: mongoose } = require('mongoose')
const wishlistModel = require('../../models/wishlist/wishlist')
const wishlistValidators = require('../validators/wishlist')
const wishList = require('../validators/wishlist')

const controller = {

    createWishList: async (req, res) => {
        // check if the create wishlist fulfills data schema validation
        const validationResults = wishlistValidators.updateWishList.validate(req.body)

        //if does not fulfill data schema validation, throw out error
        if (validationResults.error) {
            res.send(validationResults.error)
            return
        }
        
        // get the value of the wishlist which has been verified
        const validatedResults = validationResults.value

        // create the model with the validation data schema
        try {
            await wishlistModel.create(validatedResults)
        } catch(err) {
            console.log(err)
        }

        // redirect to wishlist page after updating
        res.redirect('/wishlist')
        return
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
        const wishList = await wishlistModel.find.exec()

        //render out the wishlist in the wishlist page
        res.render('/wishlist', {wishList})
    },

}

module.exports = controller