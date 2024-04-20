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
app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/sita1.html"));
});
app.get("/Yeux", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/yeux.html"));
});
app.get("/Plus", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/plus.html"));
});
app.get("/Panier", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/Painer.html"));
});
app.get("/Levre", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/pageteint.html"));
});
app.get("/Teint", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/pageteint.html"));
});
app.get("/Login", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/login.html"));
});
app.get("/Signup", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/inscription.html"));
});
app.get("/all", (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/page erreur.html"));
});

// app.all("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./Public/sita1.html"));
// });
// app.put("/login", (req, res) => {

// });
