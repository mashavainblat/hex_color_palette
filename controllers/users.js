var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user_model.js");
// var Collection = require("../models/collection_model.js");
// var Palette = require("../models/palette_model.js");
var hexColors = require("../models/hex_colors.js");

//INDEX GET
router.get("/", function(req, res){
	res.locals.login = req.isAuthenticated();
	User.find(function(error, users){
		res.render("user/index.ejs", {users:users});		
	})
});


//NEW GET
router.get("/", function(req, res){
	res.render("user/index.ejs", {colors:hexColors});
});

// USER CREATE - SIGNUP
router.post("/", passport.authenticate("local-signup", {
		failureRedirect: "/users"}),
		function(req, res){
			console.log(req.body)
			res.redirect("/users/", req.user.id);
		});

// //SHOW GET
router.get("/:id", function(req, res){
	res.render("user/show.ejs", {colors:hexColors});
});
//PROFILE SECTION


//DESTROY



//MIDDLEWARE
function isLoggedIn(req, res, next) {
	console.log('isLoggedIn middleware');
  if (req.isAuthenticated()) {
  	return next(); 
  } else {
  	res.redirect('/users');
  }
}


module.exports = router;