var net = require( 'net' );
var server = net.createServer( function( socket ) {
	var date = new Date();
	var zerofill = function( val ) {
		return ( val <= 9 ? '0' : '' ) + val;
	};

	socket.end( date.getFullYear() + '-'
	            + zerofill( date.getMonth() + 1 ) + '-'
	            + zerofill( date.getDate() ) + ' '
	            + zerofill( date.getHours() ) + ':'
	            + zerofill( date.getMinutes() ) + '\n' );

} );
server.listen( Number( process.argv[ 2 ] ) );