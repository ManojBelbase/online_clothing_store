import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import upload from "./middleware/multer.js"; // Multer middleware for file uploads
import connectDB from "./db.js"; // Database connection
import productRoute from "./Routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Serve static images
app.use("/images", express.static("uploads/images"));

// Image upload endpoint
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }
  res.json({
    success: true,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// Use the product routes
app.use("/api", productRoute);

// Start the server
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
