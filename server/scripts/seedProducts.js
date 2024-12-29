const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config({ path: 'c:/Downloads-Present/New Programs/SujoyNew/.env' });

const dummyProducts = [
  {
    name: "Nitrogen-Rich Fertilizer",
    description: "High nitrogen content for leafy growth",
    price: 25.99,
    category: "Nitrogen Fertilizer",
    stockQuantity: 500
  },
  {
    name: "Phosphorus Blend",
    description: "Promotes root development and flowering",
    price: 29.99,
    category: "Phosphorus Fertilizer",
    stockQuantity: 300
  },
  {
    name: "Potassium Booster",
    description: "Enhances overall plant health and disease resistance",
    price: 32.50,
    category: "Potassium Fertilizer",
    stockQuantity: 250
  },
  {
    name: "Organic Compost Mix",
    description: "100% natural organic fertilizer",
    price: 19.99,
    category: "Organic Fertilizer",
    stockQuantity: 400
  },
  {
    name: "Micronutrient Complex",
    description: "Comprehensive trace element supplement",
    price: 45.00,
    category: "Specialty Fertilizer",
    stockQuantity: 150
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing products
    await Product.deleteMany({});
    console.log('Existing products cleared');

    // Insert new products
    const insertedProducts = await Product.insertMany(dummyProducts);
    console.log(`${insertedProducts.length} products have been seeded`);

    // Close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();