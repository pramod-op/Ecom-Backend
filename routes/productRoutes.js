const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);

productRoutes.get("/:id", getProductById);

productRoutes.post("/", createProducts);

productRoutes.put("/:id", updateProduct);

productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;
