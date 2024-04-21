const express = require("express");
const path = require("path");
const Router = express.Router();
Router.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "./Public/yeux.html"));
});

module.exports = Router;
