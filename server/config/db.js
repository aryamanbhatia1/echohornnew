const mongoose = require('mongoose');

let mongoConnected = false;

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log('MongoDB URI not found. Running with in-memory database arrays.');
    return false;
  }

  try {
    await mongoose.connect(uri);
    mongoConnected = true;
    console.log('MongoDB connected successfully.');
    return true;
  } catch (error) {
    console.log('MongoDB connection failed. Falling back to in-memory database arrays.');
    console.log(error.message);
    mongoConnected = false;
    return false;
  }
}

function isMongoConnected() {
  return mongoConnected && mongoose.connection.readyState === 1;
}

module.exports = { connectDB, isMongoConnected };
