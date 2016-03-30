var mongoose = require( 'mongoose' );
var uristring = process.env.MONGOLAB_URI || 'mongodb://XXX';

var db = mongoose.connection;

db.on( 'error', console.error );
db.once( 'open', function() {
	console.log( 'Connection established' );
	db.close();
	console.log( 'Disconnected' );
} );

mongoose.connect( uristring );
