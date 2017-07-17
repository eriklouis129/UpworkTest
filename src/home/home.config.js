(function() {
	angular
		.module('app.home')	
	    .config(['$stateProvider', function($stateProvider) {
	    	$stateProvider
	    		.state('home', {
	    			url: '/',
	    			templateUrl: 'src/home/home.html',
	    			controller: 'homeCtrl',
	    			controllerAs: 'vm'
	    		})
	    }]);
})()
