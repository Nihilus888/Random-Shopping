const wishlistModel = require('../../models/wishlist/wishlist')
const wishlistValidators = require('../validators/wishlist')
const wishlist = require('../validators/wishlist')

const controller = {

    createWishList: async (req, res) => {
        // check if the create wishlist fulfills data schema validation
        const validationResults = wishlistValidators.createWishListValidator.validate(req.body)

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

        //compare it to the object id in the DB

        //if it is in the DB, delete from DB

        
    }
}