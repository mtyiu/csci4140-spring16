function getVideoIDFromURL( url ) {
	var regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
	var match = url.match( regExp );
	// console.log( match[ 2 ] );
	if ( match && match[ 2 ].length == 11 ){
		return match[ 2 ];
	} else {
		return url;
	}
}
