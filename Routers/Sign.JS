const express = require("express");
const users = require("../UsersDB.js");
const path = require("path");
const Router = express.Router();

Router.use(express.urlencoded({ extended: false }));

Router.route("/").post((req, res) => {
  console.log("incoming request: " + req.body.email);
  try {
    let error = false;
    for (let i in users) {
      if (req.body.email == users[i].email) {
        return res.send(
          `<h1>Email already in use: Please <a href="/login">login</a></h1>`
        );
      }
      if (req.body.num == users[i].number) {
        return res.send(
          `<h1>Phone number already in use: Please <a href="/login">login</a></h1>`
        );
      }
    }
    if (req.body.password != req.body.repassword) {
      return res.send(`<h1>Please <a href="/signup">try again</a></h1>`);
    }
    if (error) {
      return res.send(`<h1>Please <a href="/signup">try again</a></h1>`);
    } else {
      const user = {
        fname: req.body.nom,
        lname: req.body.prenom,
        number: req.body.num,
        email: req.body.email,
        password: req.body.password,
      };
      users.push(user);
      return res.send(`<h1>Please <a href="/login">login</a></h1>`);
    }
  } catch (e) {
    return res.status(501).send("Internal error: " + e.message);
  }
});

module.exports = Router;
