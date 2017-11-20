var app = angular.module( 'csci4140App', [ 'angular-loading-bar', 'ngAnimate' ] );

app.controller( 'DefaultController', function ( $scope, $http ) {
	$scope.download = function( url ) {
		window.open( url, '_blank' );
		ga( 'send', 'event', 'download', url );
	};
	$scope.count = 0;

	var jsons = [ 'news', 'metadata', 'navs', 'modals', 'tutorials' ];
	for ( var i in jsons ) {
		$http.get( 'json/' + jsons[ i ] + '.json' ).success( function() {
			var key = jsons[ i ];
			return function( data ) {
				$scope[ key ] = data;
				$scope.count++;
				if ( $scope.count == jsons.length ) {
					$scope.htmlReady && $scope.htmlReady();
				}
			}
		}() );
	}
});

app.filter( 'raw', [ '$sce', function( $sce ){
	return function( val ) {
		return $sce.trustAsHtml( val );
  };
} ] );
