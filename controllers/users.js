var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user_model.js");
// var Collection = require("../models/collection_model.js");
// var Palette = require("../models/palette_model.js");
var hexColors = require("../models/hex_colors.js");

//INDEX GET
router.get("/", function(req, res){
	// User.find(function(error, data){
		res.render("user/index.ejs", {colors:hexColors});		
	// })
});

// USER CREATE - SIGNUP
router.get("/", passport.authenticate("local-signup", {
		failureRedirect: "/users"
	}), function(req, res){
	res.redirect("/users/", req.user.id);
});

//NEW GET
router.get("/", function(req, res){
	res.render("user/index.ejs", {colors:hexColors});
});

//PROFILE SECTION
//SHOW GET
router.get("/:id", function(req, res){
	res.render("user/show.ejs", {colors:hexColors});
});

//CREATE POST
router.post("/:id", function(req, res){
	console.log(req.params.id)
		res.redirect("/users/" + user.id);	
});

//DESTROY

module.exports = router;