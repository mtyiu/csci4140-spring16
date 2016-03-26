$( function() {
	var timeout = null
	var account = null
	var latestOnly = true

	var query = function() {
		$.ajax( {
			url : 'http://52.76.12.160:41400/jsonp/1' + ( $( '#account' ).val() != '' ? '/' + $( '#account' ).val() : '' ),
			jsonp : 'callback',
			dataType : 'jsonp',
			success : function( data ) {
				var html = ''
				var sid = []
				for ( var d in data ) {
					html += '<tr'
					if ( sid.indexOf( data[ d ].s ) !== -1 ) {
						html += ' class="not-latest"'
					} else {
						html += ' class="latest"'
						sid.push( data[ d ].s )
					}
					html += (
						'>' +
						'<td>' + data[ d ].i + '</td>' +
						'<td>' + data[ d ].t + '</td>' +
						'<td>' + data[ d ].s + '</td>' +
						'<td>' + data[ d ].h + '</td>' +
						'</tr>'
					)
				}
				if ( html == '' )
					html = '<tr><td colspan="4"><p class="text-center lead">No records</p></td></tr>'

				$( '#list' ).html( html )

				$( '#show-latest' ).change()

				$( '#submission' ).html( $( '.latest' ).length )
				$( '#percent' ).html( ( $( '.latest' ).length / 63 * 100 ).toFixed( 1 ) )

				timeout = setTimeout( query, 2000 )
			}
		} )
	}
	query()

	var filter = function( e ) {
		e.preventDefault()
		clearTimeout( timeout )
		account = $( '#account' ).val() != '' ? $( '#account' ).val() : null
		query()
	}
	$( '#filter-form' ).submit( filter )
	$( '#account' ).blur( filter )

	$( '#show-latest' ).change( function() {
		latestOnly = this.checked
		if ( latestOnly )
			$( '.not-latest' ).hide()
		else
			$( '.not-latest' ).show()
	} )
} )
