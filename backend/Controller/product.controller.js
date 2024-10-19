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
    console.log(products);
    if (!products) {
      res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Blogs fetch successfully", data: products });
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
