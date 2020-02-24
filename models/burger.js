var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAll("burgers");

// Find a pet in the pets table by an animal_name of Rachel.
orm.insertOne("burgers", "burger_name", "devoured", "Beef Burger", true);

// Find the buyer with the most pets.
orm.updateOne("burgers", "burger_name", "Chicken Bacon Burger", "id", 3);
