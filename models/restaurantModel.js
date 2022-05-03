const nedb = require("nedb");
class Restaurant {
  constructor(dbFilePath) {
    this.db = new nedb({ filename: "menu.db", autoload: true });
    console.log("DB connected to " + dbFilePath);
  }

  init() {
    this.db.insert({
      dish: "Lasagna",
      description: "a lasagna",
      ingredients: "A list of ingredients here",
      allergens: "a list of allergens here",
      price: 14.99,
      menu: "Specials",
      available: "yes",
    });
    //for debugging
    console.log("db entry Lasagna inserted");
  }

  getAllEntries() {
    //return a Promise object, which can be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({}, function (err, entries) {
        //if error occurs reject Promise
        if (err) {
          reject(err);
          //if no error resolve the promise & return the data
        } else {
          resolve(entries);
          //to see what the returned data looks like
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

  getSpecials() {
    return new Promise((resolve, reject) => {
      this.db.find(
        { menu: "Specials", available: "yes" },
        function (err, entries) {
          if (err) {
            reject(err);
          } else {
            resolve(entries);
            console.log("Specials returned");
          }
        }
      );
    });
  }

  getApps() {
    return new Promise((resolve, reject) => {
      this.db.find(
        { menu: "Appetisers", available: "yes" },
        function (err, entries) {
          if (err) {
            reject(err);
          } else {
            resolve(entries);
            console.log("Apps returned");
          }
        }
      );
    });
  }

  getMains() {
    return new Promise((resolve, reject) => {
      this.db.find({ menu: "Main", available: "yes" }, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("Mains returned");
        }
      });
    });
  }

  addEntry(dish, description, ingredients, allergens, price, menu, available) {
    var entry = {
      dish: dish,
      description: description,
      ingredients: ingredients,
      allergens: allergens,
      price: price,
      menu: menu,
      available: available,
    };
    console.log("dish created", entry);
    this.db.insert(entry, function (err, doc) {
      if (err) {
        console.log("Error inserting document", subject);
      } else {
        console.log("document inserted into the database", doc);
      }
    });
  }

  deleteEntry(name) {
    this.db.remove({ dish: name }, {}, function (err, docsRem) {
      if (err) {
        console.log("error deleting document");
      } else {
        console.log(docsRem, "document removed from database");
      }
    });
  }

  updateEntry(name, available) {
    this.db.update(
      { dish: name },
      { $set: { available: available } },
      {},
      function (err, docs) {
        if (err) {
          console.log("error updating documents", err);
        } else {
          console.log(docs, "documents updated");
        }
      }
    );
  }
}

module.exports = Restaurant;
