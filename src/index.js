const express = require("express");

const bodyParser = require("body-parser");

const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");

const PORT = serverConfig.PORT; // SRP -> Single Responsibility Principle
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());


app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
