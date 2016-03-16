var fs = require( 'fs' );
var path = require( 'path' );

module.exports = function( dirname, ext, callback ) {
	var ext = '.' + ext;
	fs.readdir( dirname, function( err, data ) {
		if ( err )
			return callback( err );

		var ret = data.filter( function( i ) {
			return ( path.extname( i ) == ext );
		} );
		callback( null, ret );
	} );
};
