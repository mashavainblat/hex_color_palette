var express = require("express");
var router = express.Router();

var Collection = require("../models/collection_model.js");

//INDEX
router.get("/", function(req, res){
	res.send("All Palette's page")
})


module.exports = router;
