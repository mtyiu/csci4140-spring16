var http = require( 'http' );
var bl = require( 'bl' );
var ret = [];
var count = 0;
for ( var i = 2; i < 5; i++ ) {
	http.get( process.argv[ i ], function() {
		var my_i = i;
		return function( response ) {
			response.pipe( bl( function( err, data ) {
				if ( err )
					return console.error( "Error: " + err );
				ret[ my_i - 2 ] = data.toString();
				count++;
            
				if ( count == 3 ) {
					for ( var j = 0; j < 3; j++ )
						console.log( ret[ j ] );
				}
			} ) );
		};
	}() );
}
