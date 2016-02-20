// console.log("Serving");

//REQUIREMENTS
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");

//colors
var hexColors = require("./models/hex_colors.js");

//CONNECT TO DB:
mongoose.connect("mongodb://localhost/hex_color_palette");

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

require("./config/passport.js")(passport)

//CONTROLLERS
var usersController = require("./controllers/users.js");
// var collectionController = require("./controllers/collections.js");
// var palettersController = require("./controllers/palettes.js");

app.use("/users", usersController);
// app.use("/collection", collectionController);
// app.use("palletes", palettesController);

app.get("/", function(req, res){
	res.redirect("/users");
})

//LISTENER
mongoose.connection.once("open", function(){
	app.listen(port, function(){
		console.log("==========================");
		console.log("Listening on port: " + port);
		console.log("==========================");
	});
})