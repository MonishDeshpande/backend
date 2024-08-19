const express = require("express");
const dbConfig = require("./config/dbConfig");

const PORT = dbConfig.PORT; // SRP -> Single Responsibility Principle
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
