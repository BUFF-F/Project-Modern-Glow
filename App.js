const express = require("express");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const Home = require("./Routers/Home.JS");
const Levre = require("./Routers/Levre.JS");
const Login = require("./Routers/Login.JS");
const Panier = require("./Routers/Panier.JS");
const Plus = require("./Routers/Plus.JS");
const Signup = require("./Routers/Signup.JS");
const Sign = require("./Routers/Sign.JS");
const Teint = require("./Routers/Teint.JS");
const Yeux = require("./Routers/Yeux.JS");
const Log = require("./Routers/Log.JS");
const app = express();

app.use("/", Home);
app.use("/Home", Home);
app.use("/Levre", Levre);
app.use("/Login", Login);
app.use("/Panier", Panier);
app.use("/Plus", Plus);
app.use("/Signup", Signup);
app.use("/Sign", Sign);
app.use("/Teint", Teint);
app.use("/Yeux", Yeux);
app.use("/Log", Log);

app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
app.use(morgan("tiny"));
app.use(express.static("./Public"));

app.listen(port, () => {
  console.log(`server start on ${port}`);
});
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./Public/Error.html"));
});
