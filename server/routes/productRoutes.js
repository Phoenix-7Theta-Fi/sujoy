const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed products
router.post('/seed', async (req, res) => {
  try {
    await Product.deleteMany({}); // Clear existing products
    const { products } = require('../scripts/seedProducts');
    const insertedProducts = await Product.insertMany(products);
    res.status(201).json(insertedProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;