'use strict';

/**
 * @ngdoc filter
 * @name f12016App.filter:num
 * @function
 * @description
 * # num
 * Filter in the f12016App.
 */
 angular.module('f12016App')
 .filter('num', function () {
 	return function(input) {
 		return parseInt(input, 10);
 	};
 });
