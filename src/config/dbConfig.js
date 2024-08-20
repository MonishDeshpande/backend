const mongoose = require("mongoose");
const serverConfig = require("./serverConfig");
const DB_URL = serverConfig.DB_URL;
async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Sucessfully Connected MongoDB server");
  } catch (error) {
    console.log("Unable to connect to MongoDB server");
    console.log(error);
  }
}

module.exports = connectDB;
