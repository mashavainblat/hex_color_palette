var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user_model.js");
var Collection = require("../models/collection_model.js");
// var Palette = require("../models/palette_model.js");
var hexColors = require("../models/hex_colors.js");

//INDEX GET
router.get("/", function(req, res){
	// res.locals.login = req.isAuthenticated();
	User.find(function(error, users){
		res.render("user/index.ejs", {colors:hexColors, users:users});		
	});
});

//INDEX INFO FROM DB
router.get("/json", function(req, res){
	User.find(function(error, user){
		res.send(user);
	});
});

// ==============================
// 			  LOGOUT
// ==============================
router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/users");
})

// SHOW GET
router.get("/:id", function(req, res){
	User.findById(req.params.id, function(error, user){
		res.render("user/show.ejs", {colors:hexColors, user:user});
	})
});

// CREATE PALETTE

//CREATE COLLECTION
router.post("/:id/newcollection", function(req, res){
	//after user is created, find by ID
	User.findById(req.params.id, function(error, user){
		//new collection = req.body of "create new palette"
		var collections = new Collection(req.body);
		//save req.body(input content)
		collections.save(function(error, collection){
			//push req.body into collections array of user schema
			user.collections.push(collection);
			user.save(function(error){
				res.redirect("/users/" + req.params.id);
			})
		})
	})
})



// CREATE USER

// ==============================
// 			   SIGNUP
// ==============================

router.post("/", passport.authenticate("local-signup", {
	failureRedirect: "/users"}), 
	function(req, res){
		//successful login/signup redirect to show page
		console.log("================================")
		console.log("persisting req.user " + req.user)
		res.redirect("/users/" + req.user.id)
	});

// router.post("/", function(req, res){
// 	//create new user based on input content aka req.body
// 	User.create(req.body, (function(error, user){
// 		console.log("USER CREATED");
// 		console.log("The current user's name is: " + user.username);
// 		//redirect to users show page
// 		res.redirect("/users/" + user.id)
// 	}))
// });


// ==============================
// 			   LOGIN
// ==============================

router.post("/login", passport.authenticate("local-login", {
	failureRedirect: "/users"}),
	function(req, res){
		res.redirect("/users/" + req.user.id)
	}
);



//NEW GET
router.get("/", function(req, res){
	res.render("user/index.ejs", {colors:hexColors});
});




//DESTROY



//MIDDLEWARE
function isLoggedIn(req, res, next) {
	console.log('isLoggedIn middleware');
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()) {
		return next(); 
	// if they aren't, redirect to home page aka /user route
	} else {
		res.redirect('/users');
	}
}


module.exports = router;