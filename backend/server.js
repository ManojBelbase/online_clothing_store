import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import upload from "./middleware/multer.js"; // Import the multer middleware
import connectDB from "./db.js"; // Import the DB connection function
import productRoute from "./Routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB();

// creating upload endpoints for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// Use the product routes
app.use("/api", productRoute);

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
