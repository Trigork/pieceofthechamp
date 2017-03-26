angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$routeProvider
	// home page route
	.when('/', {
		templateUrl: 'app/views/pages/skins.html',
		controller: 'skinsController',
		controllerAs: 'skins'
	})
	.when('/stats', {
		templateUrl: 'app/views/pages/stats.html',
		controller: 'statsController',
		controllerAs: 'stats'
	})
	.when('/about', {
		templateUrl: 'app/views/pages/about.html',
		controller: 'aboutController',
		controllerAs: 'about'
	})
});
