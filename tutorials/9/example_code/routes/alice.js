var router = require( 'express' ).Router();

router.get( '/', function( request, response ) {
	response.send( '[/alice] Home' );
});

router.get( '/whoami', function( request, response ) {
	response.send( '[/alice/whoami] I am Alice!' );
});

module.exports = router;
