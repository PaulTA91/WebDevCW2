const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurantController.js");

router.get("/edit", controller.show_edit);

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("404 Page Not Found");
});

router.use(function (err, req, res, next) {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error");
});

module.exports = router;
