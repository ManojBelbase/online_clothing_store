// routes/productRoutes.js
import express from "express";
import {
  addProduct,
  addToCart,
  fetchUser,
  getAllProducts,
  getCartData,
  getProductById,
  newCollection,
  popularInWomen,
  removeFromCart,
  removeProduct,
} from "../Controller/product.controller.js";

const router = express.Router();

// Route for adding a product
router.post("/add-product", addProduct);
router.post("/remove-product", removeProduct);
router.get("/all-products", getAllProducts);
router.get("/get-product/:id", getProductById);

router.get("/new-collection", newCollection);
router.get("/popular_in_women", popularInWomen);
router.post("/addtocart", fetchUser, addToCart);
router.post("/removefromcart", fetchUser, removeFromCart);
router.post("/getcartdata", fetchUser, getCartData);
export default router;
