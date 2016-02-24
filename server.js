// console.log("Serving");

//REQUIREMENTS
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var passport = require("passport");
var passportLocal = require("passport-local");
var bcrypt = require("bcrypt-nodejs");
var session = require("express-session");
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/hex_color_palette';

//colors
var hexColors = require("./models/hex_colors.js");

//CONNECT TO DB:
mongoose.connect("mongodb://localhost/hex_color_palette");
mongoose.connect(mongoUri);

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(session({secret: "string"}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
 res.locals.login = req.isAuthenticated();
 next();
});

require("./config/passport.js")(passport)

//CONTROLLERS
var usersController = require("./controllers/users.js");
var collectionController = require("./controllers/collections.js");
var palettesController = require("./controllers/palettes.js");

app.use("/users", usersController);
app.use("/collection", collectionController);
app.use("/palettes", palettesController);

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
});