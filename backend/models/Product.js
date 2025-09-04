const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true, enum: ['Apple', 'Samsung', 'Google'] },
  category: { type: String, required: true, enum: ['phone', 'accessory'] },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  specifications: {
    storage: String,
    color: String,
    screenSize: String,
    compatibility: [String] // for accessories
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);