//require dotenv file to encode password
require('dotenv').config()

const mongoose = require("mongoose");
const User = require("./models/users/users");
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

const seedUsers = [
  {
      username: 'Hello',
      password: '12345'
  },

  {
      username: 'Pao',
      password: '23456'
  }
];

const seedDB = async() => {
    await User.insertMany(seedUsers)
}

seedDB().then(() => {
    mongoose.connection.close();
})
