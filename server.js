console.log("Serving");

//REQUIREMENTS
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var logger = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

//MIDDLEWARE


//CONTROLLERS

//LISTENER
app.listen(port, function(){
	console.log("==========================");
	console.log("Listening on port: " + port);
	console.log("==========================");
});