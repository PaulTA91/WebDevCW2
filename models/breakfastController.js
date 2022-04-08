const nedb = require("nedb");

const breakfastDB = new nedb({ filename: "breakfast.db", autoload: true });
console.log("Breakfast menu created");

breakfastDB.insert({
  mealName: "French Toast",
  description:
    "Bread dipped in a batter of egg and milk and sautéed until brown. Served with sugar, maple syrup or cinnamon",
  price: 8.99,
  ingredients: "Bread, milk, egg, vegetable oil, sugar, cinnamon, syrup",
  allergens: "Dairy, gluten, milk",
});
