const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const Product = require('./models/Product');
const seedData = require('./data/seedData');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Seed database (run once)
app.get('/api/seed', async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(seedData);
    res.json({ message: 'Database seeded successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Basic product routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});