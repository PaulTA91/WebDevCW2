const express = require("express");
const router = require("./routes/restaurantRoutes");
const app = express();
const path = require("path");
require("dotenv").config();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

const mustache = require("mustache-express");
app.engine("mustache", mustache());
app.set("view engine", "mustache");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("4040 Not Found");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server listening on port ${PORT}");
});
