(function() {
	angular
	    .module('app', [    	
	    	'ui.router',
	    	'ui.bootstrap',
	        'app.directive',
	    	'app.home'
	    ])

	    .config(['$locationProvider', function($locationProvider) {
	        $locationProvider.html5Mode({
	            enabled: true,
	            requireBase: false
	        }).hashPrefix('!');
	    }])

	    .constant('baseUrl', 'https://www.reddit.com');
})()
