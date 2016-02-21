var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
// var collectionSchema = require("./collection_model").schema;
// var paletteSchema = require("./palette_model").schema;

var userSchema = mongoose.Schema({

	username: {type:String, required: true, unique: true},
	email: {type:String, required: true},
	password: {type:String, required: true}
	// collection: [collectionSchema]
});

userSchema.methods.generateHash = function() {
    return bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
} // this is the method to imply the bcrypt shit

userSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);