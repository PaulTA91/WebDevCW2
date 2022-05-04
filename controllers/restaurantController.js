const { response } = require("express");
const restaurantDAO = require("../models/restaurantModel");
const userDao = require("../models/userModel.js");

const db = new restaurantDAO();
//db.init();
//db.getAllEntries();

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

exports.menu_main_page = function (req, res) {
  res.render("menuMain", {
    title: "Menus",
  });
};

exports.showLoginPage = function (req, res) {
  res.render("login", {
    title: "Login",
  });
};

exports.showSpecials = function (req, res) {
  db.getSpecials()
    .then((list) => {
      res.render("specials", {
        title: "Specials",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.showApps = function (req, res) {
  db.getApps()
    .then((list) => {
      res.render("apps", {
        title: "Appetisers",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.showMains = function (req, res) {
  db.getMains()
    .then((list) => {
      res.render("entree", {
        title: "Entreés",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.showDesserts = function (req, res) {
  db.getDesserts()
    .then((list) => {
      res.render("desserts", {
        title: "Desserts",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.showDrinks = function (req, res) {
  db.getDrinks()
    .then((list) => {
      res.render("drinks", {
        title: "Drinks",
        entries: list,
      });
    })
    .catch((err) => {
      console.log("promise rejected", err);
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
    req.body.menu,
    req.body.available
  );
  res.redirect("/edit");
};

exports.deleteDish = function (req, res) {
  console.log("processing deletion");
  db.deleteEntry(req.body.remDish);
  res.redirect("/edit");
};

exports.update_availability = function (req, res) {
  console.log("updating availability");
  db.updateEntry(req.body.dishName, req.body.available);
  res.redirect("/edit");
};

exports.showNewEntry = function (req, res) {
  res.render("edit", {
    title: "Edit Menu",
  });
};

exports.post_new_user = function (req, res) {
  const user = req.body.newUser;
  const password = req.body.newPassword;

  if (!user || !password) {
    res.send(401, "no user or no password");
    return;
  }
  userDao.lookup(user, function (err, u) {
    if (u) {
      res.send(401, "user exists", user);
      return;
    }
    userDao.create(user, password);
    console.log("Register user: ", user, " Password: ", password);
    res.redirect("/login");
  });
};
