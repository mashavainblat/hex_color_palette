var express = require("express");
var router = express.Router();

var Collection = require("../models/collection_model.js");
var User = require("../models/user_model.js");

//INDEX
router.get("/", function(req, res){
	res.render("collection/index.ejs");
})


module.exports = router;