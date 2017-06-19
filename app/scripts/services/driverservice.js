'use strict';

/**
 * @ngdoc service
 * @name f12016App.DriverService
 * @description
 * # DriverService
 * Service in the f12016App.
 */
 angular.module('f12016App')
 .service('DriverService', function ($http, $q, ENV) {
 	return {
 		// Get All Drivers
 		find: function () {
 			return $http.get(ENV.apiEndpoint + '/driverStandings.json')
 			.then(function(response) {
 				if (typeof response.data === 'object') {
 					return response.data;
 				} else {
						// invalid response
						return $q.reject(response.data);
					}

				}, function(response) {
				// something went wrong
				return $q.reject(response.data);
			});
 		},
		// Get Driver by Id
		get: function (driverId) {
			return $http.get(ENV.apiEndpoint + '/drivers/' + driverId + '/driverStandings.json')
			.then(function(response) {
				if (typeof response.data === 'object') {
					return response.data;
				} else {
						// invalid response
						return $q.reject(response.data);
					}

				}, function(response) {
				// something went wrong
				return $q.reject(response.data);
			});
		},
		// Get Races by Driver Id
		races: function (driverId) {
			return $http.get(ENV.apiEndpoint + '/drivers/' + driverId + '/results.json')
			.then(function(response) {
				if (typeof response.data === 'object') {
					return response.data;
				} else {
						// invalid response
						return $q.reject(response.data);
					}

				}, function(response) {
				// something went wrong
				return $q.reject(response.data);
			});
		},
	};
});
