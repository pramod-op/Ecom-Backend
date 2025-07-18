const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const createProducts = async (req, res) => {
  try {
    // Create products using model
    const products = await Product.create(req.body);

    // Send created product in response
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
