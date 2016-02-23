var express = require("express");
var router = express.Router();

var Collection = require("../models/collection_model.js");

//INDEX
router.get("/", function(req, res){
	Collection.find(function(error, palettes){
		res.render("palettes/index.ejs", {palettes:palettes})
	});
});


module.exports = router;