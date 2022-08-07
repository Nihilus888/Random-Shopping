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
    const productId = req.params.product_id;
    console.log(productId);
    try {
      await wishlistModel.findByIdAndRemove(productId);
      console.log("delete successful");
    } catch (err) {
      console.log(err);
    }
    res.redirect("/wishlist");
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
    const product = await wishlistModel.findById(req.params.productId);

    res.render("loggedIn/edit", { product });

    //find the product by ID and update it
    try {
      //convert project id from an object to string
      productId = product._id
      console.log(productId)
    
      console.log(req.body.productName);
      console.log(req.body.price);

      //if update wishlist is empty
      if (!product) {
        res.send("error not found");
        return;
      }
      await wishlistModel.update({_id: req.params.productId}, {productName: req.body.productName}, {price: req.body.price}, {expectedDelivery: req.body.expectedDelivery}, {country: req.body.country});
      console.log("update successful");
      res.redirect("/wishlist");
    } catch (err) {
      console.log(err);
      res.send("error with updating");
    }
    res.redirect("/wishlist");
  },

  //get specific product details
  getWishList: async (req, res) => {
    //get product id
    const product = await wishlistModel.findById(req.params.productId);

    //display product using EJS
    res.render("loggedIn/show", { product });
  },
};

module.exports = wishListcontroller;
