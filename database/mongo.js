const mongoose = require("mongoose");

const connStr =
  "mongodb+srv://Nihilus888:12345@generalassembly.odxzs.mongodb.net/test";

const DB = mongoose.connect(connStr, { dbName: "RandomShop" });

module.exports = DB;
