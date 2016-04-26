var express = require("express");
var router = express.Router();
var passport = require("passport");
var session = require("express-session");

var Collection = require("../models/collection_model.js");
var User = require("../models/user_model.js");

//INDEX
router.get("/", function(req, res){
	sess = req.session;
	// console.log("===========================");
	// console.log("sess: " + sess.user.username);
		Collection.find(function(error, palettes){
			res.render("palettes/index.ejs", {palettes:palettes})
		});
	// })
});


module.exports = router;