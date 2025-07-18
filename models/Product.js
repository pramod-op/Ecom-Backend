const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    rate: {
      type: String,
      required: true,
    },
    count: {
      type: String,
      required: true,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
