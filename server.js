console.log("Serving");

//REQUIREMENTS
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
// var logger = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

//CONNECT TO DB:
mongoose.connect("mongodb://localhost/hex_color_palette")

//MIDDLEWARE
// app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

//CONTROLLERS

//LISTENER
app.listen(port, function(){
	console.log("==========================");
	console.log("Listening on port: " + port);
	console.log("==========================");
});