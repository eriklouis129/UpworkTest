(function() {
	angular
		.module('app.home')
		.controller('homeCtrl', ['homeService', function(homeService) {

			var vm = this;

			angular.extend(vm, {
				data: []
			});

			function init () {
				homeService.getData().then(function(response) {
					vm.data = response.data.data.children;
				});
			}

			init();
			
		}]);
})()
