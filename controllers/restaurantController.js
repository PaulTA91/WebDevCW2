const restaurantDAO = require("../models/restaurantModel");

const db = new restaurantDAO();
db.init();

exports.show_edit = function (req, res) {
  res.render("editMenu");
};
