const express = require("express");
const path = require("path");
const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, "../Public/Signup.html"));
  })
  .post((req, res) => {
    console.log(req.body);
  });

module.exports = Router;
