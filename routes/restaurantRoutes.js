const express = require("express");
const router = express.Router();
const controller = require("../controllers/restaurantController.js");
const { login } = require("../auth/auth");
const { verify } = require("../auth/auth");

router.get("/edit", verify, controller.show_edit);
router.get("/", controller.landing_page);
router.get("/about", controller.show_about);
router.get("/showAll", controller.showAll);
router.post("/new", controller.add_new_dish);
router.get("/new", controller.showNewEntry);
router.post("/delete", controller.deleteDish);
router.post("/update", controller.update_availability);
router.get("/menu", controller.menu_main_page);
router.get("/specials", controller.showSpecials);
router.get("/apps", controller.showApps);
router.get("/login", controller.showLoginPage);
router.get("/mains", controller.showMains);
router.get("/desserts", controller.showDesserts);
router.get("/drinks", controller.showDrinks);
router.post("/register", controller.post_new_user);
router.get("/register", controller.showRegisterPage);
router.post("/login", login, controller.handle_login);
router.get("/logout", verify, controller.logout);
router.get("/contact", controller.showContactPage);

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
