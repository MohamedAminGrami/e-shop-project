require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./server").Product;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const sampleProducts = [
  {
    name: "Modern Wooden Chair",
    image: "/assets/chair.jpg",
    description: "A stylish and comfortable wooden chair.",
    price: 150
  },
  {
    name: "Luxury Sofa",
    image: "/assets/sofa.jpg",
    description: "A high-end luxury sofa for your living room.",
    price: 1200
  }
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("Database Seeded!");
  mongoose.connection.close();
};

seedDB();
