const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");
const authRoutes = express.Router();

// Register a new user
authRoutes.post("/", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.post("/logout", logoutUser);

module.exports = authRoutes;
