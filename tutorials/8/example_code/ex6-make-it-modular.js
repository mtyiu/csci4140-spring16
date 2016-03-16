var module = require( './ex6-make-it-modular-module' );
module( process.argv[ 2 ], process.argv[ 3 ], function( err, data ) {
	if ( err )
		console.error( "Error: " + err );

	data.forEach( function( i ) {
		console.log( i );
	} );
} );
