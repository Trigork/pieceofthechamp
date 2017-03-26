angular.module('skinsCtrl', [])
.controller('skinsController', function($rootScope, $location, $http) {
	var vm = this;
	$http.get("champs.json")
    .then(function(response) {
        vm.champData = response.data;
    });
});
