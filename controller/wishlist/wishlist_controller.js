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
    console.log(req.body);
    console.log(validationResults);

    //if does not fulfill data schema validation, throw out error
    if (validationResults.error) {
      console.log(validationResults.error);
      res.send(validationResults.error);
      return;
    }

    // get the value of the wishlist which has been verified
    const validatedResults = validationResults.value;
    console.log(validatedResults);

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
    try {
      await wishlistModel.findOne(
        { _id: req.params.id }.exec(function (err, wishlist) {
          if (wishlist) {
            wishlist.remove();
            res.redirect("loggedIn/wishlist");
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  },

  listWishlist: async (req, res) => {
    //find all the wishlist stored in the DB
    const wishList = await wishlistModel.find().exec();
    console.log(wishList);

    //render out the wishlist in the wishlist page
    res.render("loggedIn/wishlist", { wishList });
  },

  editWishList: async (req, res) => {
    //get product id
    const productId = req.params.id;

    //update products based on the parameters that the user wants to update
    try {
      await wishlistModel.updateOne(
        { productId },
        { productName: req.params.productName },
        { price: req.params.price },
        { expectedDays: req.params.expectedDays },
        { country: req.params.country }
      );
      res.redirect("loggedIn/wishlist")
    } catch (err) {
      console.log(err);
      res.send('error in trying to update')
      res.redirect("loggedIn/wishlist");
    }
  },

  getWishList: async (req, res) => {
    console.log(req.params.productName);
    //get product id
    const product = await wishlistModel.findById(req.params.productName);

    res.render("loggedIn/show", { product });
  },
};

module.exports = wishListcontroller;
