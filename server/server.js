const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/mongodb');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});