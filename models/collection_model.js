var mongoose = require("mongoose");

var collectionsSchema = mongoose.Schema({

	name: {type:String},
	palette: []

});

module.exports = mongoose.model("Collections", collectionsSchema);