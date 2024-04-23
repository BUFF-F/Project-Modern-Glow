const express = require("express");
const path = require("path");

const Router = express.Router();

Router.use(express.urlencoded({ extended: false }));
Router.route("/").get((req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "../Public/Login.html"));
});

module.exports = Router;
