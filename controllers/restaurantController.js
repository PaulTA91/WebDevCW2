const restaurantDAO = require("../models/restaurantModel");

const db = new restaurantDAO();
db.init();

exports.show_edit = function (req, res) {
  res.render("editMenu");
};

exports.landing_page = function (req, res) {
  res.render("index", {
    title: "Home Page",
  });
};

exports.show_about = function (req, res) {
  res.render("about", {
    title: "About Us",
  });
};
