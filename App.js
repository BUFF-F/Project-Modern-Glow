const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;
app.use(morgan("tiny"));
app.use(express.static("./Public"));
app.listen(port, () => {
  console.log(`server start on ${port}`);
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/sita1.html"));
});
app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/sita1.html"));
});
