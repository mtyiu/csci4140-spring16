var mongoose = require( 'mongoose' );

var roleSchema = mongoose.Schema( {
	type : Number,
	description : String
} );
var userSchema = mongoose.Schema( {
	name : String,
	age : Number,
	active : Boolean,
	roles : [ roleSchema ]
} );

// Create a model
var User = mongoose.model( 'User', userSchema );

module.exports = User;
