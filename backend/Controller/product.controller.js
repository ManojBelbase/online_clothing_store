import jwt from "jsonwebtoken";
import { User } from "../Model/user.model.js";
import { Product } from "../Model/product.model.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    // Fetch all products
    let products = await Product.find({});
    let id;

    // Determine the new ID based on existing products
    if (products.length > 0) {
      let lastProduct = products[products.length - 1]; // Get the last product
      id = lastProduct.id + 1; // Increment the ID for the new product
    } else {
      id = 1; // Start with 1 if there are no products
    }

    const { name, image, category, new_price, old_price } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      id,
      name,
      image,
      category,
      new_price,
      old_price,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};

// remove product
export const removeProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete(req.body.id);

    res.json({ success: true, name: req.body.name });
  } catch (error) {
    console.error("Error removing product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to remove product" });
  }
};

// Getting all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products);
    if (!products) {
      res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product fetch successfully", data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get Product by id
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

// Get newCollection products
export const newCollection = async (req, res) => {
  let product = await Product.find({});
  let newcollection = product.slice(-8, product.length);
  res.json({ newcollection });
};

//creating endpoint for  Popular in womon
export const popularInWomen = async (req, res) => {
  let product = await Product.find({ category: "women" });
  let popularinwomen = product.slice(0, 4);
  if (popularinwomen) {
    return res.status(200).json({ popularinwomen });
  }
};

// Creating middleware to fetch user
export const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).json({ errors: "Please authenticate using valid token" });
    }
  }
};

// Creating endpoints for cartData
export const addToCart = async (req, res) => {
  console.log("added", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  userData.cardData[req.body.itemId] += 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cardData: userData.cardData }
  );
  res.send("added");
};

// creating endpoint for remove product from cartdata
export const removeFromCart = async (req, res) => {
  console.log("removed", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  if (userData.cardData[req.body.itemId] > 0)
    userData.cardData[req.body.itemId] -= 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cardData: userData.cardData }
  );
  res.send("removed");
};

// creating endpoint to get cartdata
export const getCartData = async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  res.json(userData.cardData);
};
