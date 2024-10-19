// routes/productRoutes.js
import express from "express";
import {
  addProduct,
  getAllProducts,
  removeProduct,
} from "../Controller/product.controller.js";

const router = express.Router();

// Route for adding a product
router.post("/add-product", addProduct);
router.post("/remove-product", removeProduct);
router.get("/all-products", getAllProducts);

export default router;
