var mongoose = require( 'mongoose' );
var uristring = process.env.MONGOLAB_URI || 'mongodb://heroku_bbxgs9qk:egqml99fqbcc82vopjabco1apr@ds025419.mlab.com:25419/heroku_bbxgs9qk';

var db = mongoose.connection;

db.on( 'error', console.error );
db.once( 'open', function() {
	console.log( 'Connection established' );
	db.close();
	console.log( 'Disconnected' );
} );

mongoose.connect( uristring );
