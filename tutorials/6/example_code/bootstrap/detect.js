var classes = {
	'xs' : [ 'Extra small devices / Phones (< 768px)', '#A94442' ],
	'sm' : [ 'Small devices / Tablets (>= 768px)', '#8A6D3B' ],
	'md' : [ 'Medium devices / Desktops (>= 992px)', '#31708F' ],
	'lg' : [ 'Large devices / Desktops (>= 1200px)', '#3C763D' ]
};

for( var i in classes ) {
	document.write( '<div style="width: 100%; position: fixed; left: 0; bottom: 0; background-color: ' + classes[ i ][ 1 ] + '; color: #eee; padding: 10px; text-align: center; font-size: ' + ( i == 'xs' ? '12px' : '16px' ) + ';" class="visible-' + i + '-block">' );
	document.write( '<strong>Current Width:</strong> ' );
	document.write( '[<kbd style="background-color: rgba( 0, 0, 0, 0.4 );">' + i + '</kbd>] ' + classes[ i ][ 0 ] );
	document.write( '</div>' );
}