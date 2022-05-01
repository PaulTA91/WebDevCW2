const nedb = require("nedb");
class Restaurant {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: "menu.db", autoload: true });
      console.log("DB connected to " + dbFilePath);
    } else {
      this.db = new nedb();
    }
  }

  init() {
    this.db.insert({
      dish: "Lasagna",
      description: "a lasagna",
      ingredients: "A list of ingredients here",
      allergens: "a list of allergens here",
      price: 14.99,
      menu: "Specials",
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

  addEntry(dish, description, ingredients, allergens, price, menu) {
    var entry = {
      dish: dish,
      description: description,
      ingredients: ingredients,
      allergens: allergens,
      price: price,
      menu: menu,
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

  deleteEntry(dishID) {
    db.remove({ _id: dishID }, {}, function (err, docsRem) {
      if (err) {
        console.log("error deleting document");
      } else {
        console.log(docsRem, "document removed from database");
      }
    });
  }
}

module.exports = Restaurant;
