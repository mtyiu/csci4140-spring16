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

	// Instantiate a new user
	var Alice = new User( {
		name : 'Alice',
		age : 18,
		active : true,
		roles : [ { type : 1, description : 'Guest' } ]
	} );

	// Save it to the database
	Alice.save( function( err ) {
		if ( err )
			throw err;
		else
			console.log( 'Saved' );

		disconnect(); // Note: No need to disconnect if you are running an HTTP server
	} );
} );

mongoose.connect( uristring );
