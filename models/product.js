const { AutoEncryptionLoggerLevel } = require("mongodb");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
