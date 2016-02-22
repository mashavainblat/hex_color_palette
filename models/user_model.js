var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var collectionsSchema = require("./collection_model").schema;
// var paletteSchema = require("./palette_model").schema;

var userSchema = mongoose.Schema({

	username: {type:String, required: true, unique: true},
	email: {type:String},
	password: {type:String, required: true},
	collections: [collectionsSchema]
});

// ===================================
// 				METHODS
// ===================================

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);