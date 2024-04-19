const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const port = process.env.port || 5050;
app.use(morgan("tiny"));
app.use(express.static("./Public"));
app.listen(port, (req, res) => {
  console.log(`server start on ${port}`);
});
app.get("/", (req, res) => {
  path.join(__dirname, "./Public/sita1.html");
});
app.all("/", (req, res) => {
  path.join(__dirname, "./Public/sita1.html");
});
