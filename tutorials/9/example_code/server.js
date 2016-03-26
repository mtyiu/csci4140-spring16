var express = require( 'express' );
var app = express();

app.use( express.static( __dirname + '/public' ) );

// Set up root-level routes
// ------------------------
app.get( '/', function ( request, response ) {
	response.send( 'Hello World!' );
} );

app.get( '/preview', function ( request, response ) {
	response.sendFile( __dirname + '/views/player.html' );
} );

app.get( '/message/:message', function ( request, response ) {
	response.send( 'The message: ' + request.params.message );
} );

app.get( '/room/:id([0-9]+)', function ( request, response ) {
	response.send( 'The room number is: ' + request.params.id );
} );

// Demonstrating Jade templating engine
// ------------------------------------
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'jade' );
app.get( '/hi', function ( request, response ) {
	response.render( 'index',
	                { title: 'Hey', message: 'Hello there!' } );
} );

// Load external routes
// --------------------
var alice = require( './routes/alice' );
var bob = require( './routes/bob' );
app.use( '/alice', alice );
app.use( '/bob', bob );


// Start the server
// ----------------
var server = app.listen( 4140, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log( 'Listening at http://%s:%s', host, port );
} );