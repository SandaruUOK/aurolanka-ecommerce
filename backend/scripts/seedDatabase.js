const mongoose = require('mongoose');
const Product = require('../models/Product');
const seedData = require('../data/seedData');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert seed data
    await Product.insertMany(seedData);
    console.log(`✅ Database seeded successfully!`);
    console.log(`📱 Added ${seedData.length} products:`);
    
    // List added products
    seedData.forEach((product, index) => {
      console.log(`${index + 1}. ${product.brand} ${product.name} - $${product.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();