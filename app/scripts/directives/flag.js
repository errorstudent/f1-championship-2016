'use strict';

/**
 * @ngdoc directive
 * @name f12016App.directive:flag
 * @description
 * # flag
 */
 angular.module('f12016App')
 .directive('flag', function () {
 	return {
 		restrict: 'E',
 		replace: true,
 		template: '<span class="flag {{ country }}"></span>',
 		scope: {
 			country: '@'
 		},
 		link: function(scope) {
 			scope.$watch('country', function(value) {
 				scope.country = angular.lowercase(value);
 			});
 		}
 	};
 });
