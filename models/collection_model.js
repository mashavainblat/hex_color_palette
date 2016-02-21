var mongoose = require("mongoose");

var collectionsSchema = mongoose.Schema({

	name: {type:String}

});

module.exports = mongoose.model("Collections", collectionsSchema);