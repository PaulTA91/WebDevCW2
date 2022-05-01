const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurantController.js");

router.get("/edit", controller.show_edit);
router.get("/", controller.landing_page);
router.get("/about", controller.show_about);
router.post("/showAll", controller.showAll);
router.post("/new", controller.add_new_dish);
router.get("/new", controller.showAll);

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
