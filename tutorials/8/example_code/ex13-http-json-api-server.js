var http = require( 'http' );
var url = require( 'url' );

var server = http.createServer( function( request, response ) {
	var parsedUrl = url.parse( request.url, true );
	var ret = {};

	switch( parsedUrl.pathname ) {
		case '/api/parsetime':
			var date = new Date( parsedUrl.query.iso );
			ret.hour = date.getHours();
			ret.minute = date.getMinutes();
			ret.second = date.getSeconds();
			break;
		case '/api/unixtime':
			var date = new Date( parsedUrl.query.iso );
			ret.unixtime = date.getTime();
			break;
		default:
			return response.writeHead( 404 ).end();
	}

	response.writeHead( 200, { 'Content-Type' : 'application/json' } );
	response.end( JSON.stringify( ret ) );
} );
server.listen( Number( process.argv[ 2 ] ) );