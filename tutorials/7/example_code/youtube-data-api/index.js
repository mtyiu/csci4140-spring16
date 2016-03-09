$( function() {
	$( 'form' ).submit( function( e ) {
		e.preventDefault();

		var apiKey = $( '#key' ).val();
		var videoId = $( '#video-id' ).val();
		var url = 'https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=' + videoId + '&key=' + apiKey

		// AJAX GET request
		$.get( url, function( data ) {
			// Check if the video ID is valid
			if ( data.items.length == 0 ) {
				alert( 'Video not found!' );
				return;
			}

			// Retrieve video title from ".items[ 0 ].snippet.title"
			$( '#title' ).html( data.items[ 0 ].snippet.title );

			// Debug message
			$( '#url' ).html( url );
			$( '#response' ).html( JSON.stringify( data ) );
		} );
	} );
} );
