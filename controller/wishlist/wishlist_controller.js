const { default: mongoose } = require("mongoose");
const wishlistModel = require("../../models/wishlist/wishlist");
const wishlistValidators = require("../validators/wishlist");
const wishList = require("../validators/wishlist");

const wishListcontroller = {
  createWishList: async (req, res) => {
    // check if the create wishlist fulfills data schema validation
    const validationResults = wishlistValidators.createWishList.validate(
      req.body
    );

    //if does not fulfill data schema validation, throw out error
    if (validationResults.error) {
      res.send(validationResults.error);
      return;
    }

    // get the value of the wishlist which has been verified
    const validatedResults = validationResults.value;

    // create the model with the validation data schema or return error
    try {
      await wishlistModel.create(validatedResults);
    } catch (err) {
      console.log(err);
    }

    // redirect to wishlist page after updating
    console.log("create wishlist successful");
    res.redirect("/wishlist");
  },

  deleteWishList: async (req, res) => {
    //find the product with the wishlist id and remove it
    const productId = req.params.product_id
    console.log(productId)
    try {
        
      await wishlistModel.findByIdAndRemove(productId);
      console.log('delete successful')

    } catch (err) {
      console.log(err);
    }
    res.redirect('/wishlist')
  },

  listWishlist: async (req, res) => {
    //find all the wishlist stored in the DB
    const wishList = await wishlistModel.find().exec();

    //render out the wishlist in the wishlist page
    res.render("loggedIn/wishlist", { wishList });
  },

  //edit wish list
  editWishList: async (req, res) => {
    //get product id
    const productId = req.params.id;

    //if update wishlist is empty
    if(!req.params.id) {
        res.send('Please do not leave field empty')
        return
    }

    //update a specific products based on the parameters that the user wants to update 
    try {
      await wishlistModel.updateOne(
        { productId },
        { productName: req.body.productName },
        { price: req.body.price },
        { expectedDays: req.body.expectedDays },
        { country: req.body.country }
      );

      res.redirect("loggedIn/wishlist")
    } catch (err) {
      console.log(err);
      res.send('error in trying to update')
      res.redirect("loggedIn/wishlist");
    }
  },

  //get specific product details
  getWishList: async (req, res) => {
    //get product id
    const product = await wishlistModel.findById(req.params.productId)

    //display product using EJS
    res.render("loggedIn/show", { product });
  },
};

module.exports = wishListcontroller;
