const { response } = require("express");
const restaurantDAO = require("../models/restaurantModel");

const db = new restaurantDAO();
db.init();
db.getAllEntries();

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

exports.showAll = function (req, res) {
  db.getAllEntries()
    .then((list) => {
      res.render("allDishes", {
        title: "All Dishes",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.add_new_dish = function (req, res) {
  console.log("processing add-new_dish controller");
  if (!req.body.name) {
    response.status(400).send("Entries must have a name");
    return;
  }
  db.addEntry(
    req.body.name,
    req.body.description,
    req.body.ingredients,
    req.body.allergens,
    req.body.price,
    req.body.menu
  );
  res.redirect("/edit");
};

exports.deleteDish = function (req, res) {
  console.log("processing deletion");
  if (!req.body.dishID) {
    response.status(400).send("Please insert a dish ID");
    return;
  }
  db.deleteEntry(req.body.dishID);
  res.redirect("/edit");
};

exports.showNewEntry = function (req, res) {
  res.render("edit", {
    title: "Edit Menu",
  });
};
