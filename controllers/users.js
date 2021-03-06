var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user_model.js");
var Collection = require("../models/collection_model.js");
// var Palette = require("../models/palette_model.js");
var hexColors = require("../models/hex_colors.js");

//INDEX GET
router.get("/", function(req, res){
	sess = req.session;
	sess.user = req.user;
	console.log("====================");
	console.log("getting home");
	res.locals.login = req.isAuthenticated();
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
	// req.params.id == req.user.id ? res.locals.usertrue = true : res.locals.usertrue = false;
	sess = req.session;
	sess.user = req.user;
	console.log("================================");
	console.log("/:id - setting user: " + sess.user)
	console.log("================================");
	User.findById(req.params.id, function(error, user){
		res.render("user/show.ejs", {colors:hexColors, user:user});
	})
});

//CREATE PALETTE IN COLLECTION
router.post("/:id/newcollection", function(req, res){
	sess = req.session;
	sess.user = req.user;
	//after user is created, find by ID
	User.findById(req.params.id, function(error, user){
		//new collection = req.body of "create new palette"
		var collections = new Collection(req.body);
		//save req.body(input content)
		collections.save(function(error, collection){
			//push req.body into collections array of user schema
			console.log("========================");
			console.log(collection.palette)
			console.log("========================");

			// pushing newly saved collection into user.collections array
			user.collections.push(collection);

			
			collections.palette.push(collection.palette);
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


// ==============================
// 			   LOGIN
// ==============================

router.post("/login", passport.authenticate("local-login", {
	failureRedirect: "/users"}),
	function(req, res){
		console.log("=============================");
		console.log("/login logging in as: " + req.user.username);
		console.log("=============================");
		res.redirect("/users/" + req.user.id)
	}
);



//NEW GET
router.get("/", function(req, res){
	sess = req.session;
	sess.user = req.user;
	res.render("user/index.ejs", {colors:hexColors});
});

//COLLECTION
router.get("/:id/collection", function(req, res){
	sess = req.session;
	sess.user = req.user;
	User.find(function(error, user){
		res.render("user/collection.ejs", {user:user})
	})
})



//DELETE COLOR
router.get("/:id/deletecolor", function(req, res){
	sess = req.session;
	res.redirect("/users/" + req.params.id)
})

// 

//DESTROY
// router.delete("/:id", function(req, res){
// 	console.log("delete route accessed")

// 	User.find(req.params.id, function(error, user){
		
// 		// console.log(user.collections[0].palette)

// 		console.log(req.params.id)

// 		/*user.collections[0].palette*/
// 	});
// });

router.delete("/:uid/:cid", function(req, res){
	sess = req.session;
	sess.user = req.user;
	console.log("delete route accessed")
	console.log(req.params.uid);
	console.log(req.params.cid);
	var id = req.params.uid;
	var collectionId = req.params.cid;

	User.update({_id: id}, {$pull:{"collections":{ _id: collectionId } }}, function(error, user){
				

		
		// collection.findbyidandremove
		//loop through collection
		//if (user.collection.id == req.body.collection_id){
			// collection findbyidandremove(function(){
				//save array new collections model
			// })
		// }
		// })
		console.log(user);
		console.log("hopefully deleting")
		res.redirect("/users/" + req.params.uid)
		// console.log(user.collections[0].palette)


		/*user.collections[0].palette*/
	});
});



//MIDDLEWARE
// function isLoggedIn(req, res, next) {
// 	console.log('isLoggedIn middleware');
// 	// if user is authenticated in the session, carry on
// 	if (req.isAuthenticated()) {
// 		return next(); 
// 	// if they aren't, redirect to home page aka /user route
// 	} else {
// 		res.redirect('/users/' + req.user.id);
// 	}
// }


module.exports = router;