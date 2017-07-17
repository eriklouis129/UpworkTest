(function() {
	angular
		.module('app.home')
		.service('homeService', ['$http', 'baseUrl', function($http, baseUrl) {

			var api = {};

			api.getData = function() {
				return $http.get(baseUrl + '/r/all.json');
			}

			return api;

		}]);
})()
