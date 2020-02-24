var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var bObject = {
      burgers: data
    };
    console.log(bOject);
    res.render("index", bObject);
  });
});

router.insertOne("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

module.exports = router;
