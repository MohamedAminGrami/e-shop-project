require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  image: String,  // Path to assets directory
  description: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a product
app.post("/products", async (req, res) => {
  const { name, image, description, price } = req.body;
  const newProduct = new Product({ name, image, description, price });
  
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
