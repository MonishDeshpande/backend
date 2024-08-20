const express = require("express");

const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");

const PORT = serverConfig.PORT; // SRP -> Single Responsibility Principle
const app = express();

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
