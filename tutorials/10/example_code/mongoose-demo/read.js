var mongoose = require( 'mongoose' );
var User = require( './model' );
var uristring = require( './config' );

var db = mongoose.connection;

var disconnect = ( function() {
	db.close();
	console.log( 'Disconnected' );
} );

db.on( 'error', console.error );
db.once( 'open', function() {
	console.log( 'Connection established' );

	// Find all users
	User.find( function( err, users ) {
		console.log( users );
		disconnect();
	} );

	// Find by name
	/*
	User.find( { name : 'Alice' }, function( err, users ) {
		console.log( users );
		disconnect();
	} );
	*/
} );

mongoose.connect( uristring );
