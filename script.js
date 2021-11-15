function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crust = crustType;
  pizza.sauce = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var p1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella, feta"],
  ["mushrooms", "olives", "onions"]
);

var p3 = pizzaOven("deep dish", "traditional", ["mozzarella"], [""]);

var p4 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella"],
  ["mushrooms", "olives", "onions, sausage, pepperoni"]
);

function randomPizza(numberOfPizzas) {
  var crustTypes = ["Stuffed", "Cracker", "Flat Bread", "Thin"];
  var sauceTypes = ["Pesto", "White Garlic Sauce", "Garlic Ranch", "Marinara "];
  var cheeseList = ["Mozzarella ", "Cheddar ", "Parmesan "];
  var toppingsList = [
    "Pepperoni",
    "Mushroom",
    "Sausage",
    "Onion",
    "Black olives",
    "Green pepper",
    "Fresh garlic",
    "Tomato",
    "Fresh basil",
  ];
  var pizza = {};

  var elem = document.getElementById("pizza");

  for (i = 0; i < numberOfPizzas; i++) {
    pizza.crust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    pizza.sauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    pizza.cheeses = cheeseList[Math.floor(Math.random() * cheeseList.length)];
    pizza.toppings =
      toppingsList[Math.floor(Math.random() * toppingsList.length)];

    var temp = document.createElement("p");
    temp.id = i;
    elem.appendChild(temp);

    var write = document.getElementById(i);
    write.innerHTML =
      "pizza " +
      (i + 1) +
      ": " +
      pizza.crust +
      " : " +
      pizza.sauce +
      " : " +
      pizza.cheeses +
      " : " +
      pizza.toppings;
  }
}

randomPizza(100);
