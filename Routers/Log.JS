const express = require("express");
const users = require("../UsersDB.js");
const path = require("path");
const Router = express.Router();

Router.use(express.urlencoded({ extended: false }));
Router.route("/").post((req, res) => {
  console.log(users[1]);
  try {
    var access = false;
    for (var i in users) {
      if (
        users[i].email == req.body.email &&
        users[i].password == req.body.password
      ) {
        access = true;
        var user = users[i];
      }
    }
    if (access) {
      res.send(
        `<h1>Welcome ${user.fname} ${user.lname}</h1> <a href="/home">Home</a>`
      );
      res.end();
    } else {
      res.send(
        `<h1>Email or Password is incorrect. Please <a href="/login">try again</a></h1>`
      );
      res.end();
    }
  } catch (e) {
    res.status(501).send("internal error: " + e.message);
  }
});

module.exports = Router;
