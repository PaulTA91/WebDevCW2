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
      ingredients: "A list of ingredients here",
      allergens: "a list of allergens here",
      price: 14.99,
      menu: "Specials",
    });
    //for debugging
    console.log("db entry Lasagna inserted");
  }
}
module.exports = Restaurant;
