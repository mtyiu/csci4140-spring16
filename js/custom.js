$( function() {
	$( '#collapse-all' ).click( function() {
		$( '.collapse-tut.in' ).collapse( 'hide' )
	} )
	$( '#expand-all' ).click( function() {
		$( '.collapse-tut' ).collapse( 'show' )
	} )
	$( '#show-current-only' ).click( function() {
		$( '.collapse-tut.in:not(.current)' ).collapse( 'hide' )
		$( '.collapse-tut.current:not(.in)' ).collapse( 'show' )
	} )
	$( '#show-all-outline' ).click( function() {
		$( '.collapse-outline' ).collapse( 'toggle' )
	} )

	$( 'a' ).click( function( e ) {
		if ( $( this ).data( 'track' ) ) {
			ga( 'send', 'event', 'download', $( this ).attr( 'href' ) )
		}
	} )
} )
