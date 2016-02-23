$( function() {
	var timeout = null
	var account = null

	var query = function() {
		$.ajax( {
			url : 'http://52.76.12.160:41400/jsonp/1' + ( $( '#account' ).val() != '' ? '/' + $( '#account' ).val() : '' ),
			jsonp : 'callback',
			dataType : 'jsonp',
			success : function( data ) {
				var html = ''
				for ( var d in data ) {
					html += (
						'<tr>' +
						'<td>' + data[ d ].i + '</td>' +
						'<td>' + data[ d ].t + '</td>' +
						'<td>' + data[ d ].s + '</td>' +
						'<td>' + data[ d ].h + '</td>' +
						'</tr>'
					)
				}

				$( '#list' ).html( html )

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
} )
