var mongoose = require("mongoose");
var brcypt = require("bcrypt-nodejs");
// var collectionSchema = require("./collection_model").schema;
// var paletteSchema = require("./palette_model").schema;

var userSchema = mongoose.Schema({

	username: {type:String, required: true, unique: true},
	email: {type:String, required: true},
	password: {type:String, required: true}
	// collection: [collectionSchema]
});

module.exports = mongoose.model("User", userSchema);