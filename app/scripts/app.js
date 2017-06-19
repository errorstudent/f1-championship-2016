'use strict';

/**
 * @ngdoc overview
 * @name f12016App
 * @description
 * # f12016App
 *
 * Main module of the application.
 */
 angular
 .module('f12016App', [
 	'config',
 	'ngMaterial',
 	'ngMdIcons',
 	'ngAnimate',
 	'ngCookies',
 	'ngResource',
 	'ngSanitize',
 	'ui.router',
 	'md.data.table'
 	])
 .config(function($mdThemingProvider) {
 	$mdThemingProvider.theme('default')
 	.primaryPalette('blue');
 })
 .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
 	$stateProvider
 	.state('standing', {
 		views: {
 			'header': {
 				templateUrl: 'views/header.html'
 			},
 			'footer':{
 				templateUrl: 'views/footer.html'
 			}
 		}
 	})
 	.state('standing.list', {
 		url: '/',
 		views: {
 			'container@' : {
 				templateUrl: 'views/standing/standing.list.html',
 				controller: 'StandingListCtrl'
 			}
 		}
 	})
 	.state('standing.detail', {
 		url: '/:driverId',
 		views: {
 			'container@' : {
 				templateUrl: 'views/standing/standing.detail.html',
 				controller: 'StandingDetailCtrl'
 			}
 		}
 	});

	// Use HTML 5
	$locationProvider.html5Mode(true).hashPrefix('!');
});
