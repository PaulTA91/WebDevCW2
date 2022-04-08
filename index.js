const express = require("express");
const router = require("./routes/restaurantRoutes");
const app = express();
require("dotenv").config();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const mustache = require("mustache-express");
app.engine("mustache", mustache());
app.set("view engine", "mustache");

const path = require("path");
const public = path.join(__dirname, "public");
app.use(express.static(public));

app.use(express.urlencoded({ extended: false }));

router.get("/about", function (req, res) {
  res.redirect("/about.html");
});

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("4040 Not Found");
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^C to quit.");
});
