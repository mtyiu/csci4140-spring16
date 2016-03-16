var fs = require( 'fs' );
var path = require( 'path' );
var ext = '.' + process.argv[ 3 ];

fs.readdir( process.argv[ 2 ], function( err, data ) {
	data.forEach( function( i ) {
		if ( path.extname( i ) == ext )
			console.log( i );
	} );
} );
