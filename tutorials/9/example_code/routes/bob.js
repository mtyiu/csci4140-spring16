var router = require( 'express' ).Router();

router.get( '/', function( request, response ) {
	response.send( '[/bob] Home' );
});

router.get( '/whoami', function( request, response ) {
	response.send( '[/bob/whoami] I am Bob!' );
});

module.exports = router;
