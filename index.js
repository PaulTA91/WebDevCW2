const express = require("express");
const router = require("./routes/restarauntRoutes");
const app = express();
const path = require("path");

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

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^C to quit.");
});
