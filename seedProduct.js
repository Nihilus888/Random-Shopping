//require dotenv file to encode password
require('dotenv').config()

const mongoose = require("mongoose");
const Product = require("./models/products/products");
const connStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@generalassembly.odxzs.mongodb.net`


mongoose
  .connect(
    connStr,
    { dbName: "RandomShop" },
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [
  {
    productName: "Random Wallet",
    price: 100,
    expectedDelivery: 2,
    country: "USA",
  },

  {
    productName: "Random Bag",
    price: 200,
  },

  {
      productName: "Random Computer",
      price: 1000,
      Country: "Singapore"
  }
];

const seedDB = async() => {
    await Product.insertMany(seedProducts)
}

seedDB().then(() => {
    mongoose.connection.close();
})
