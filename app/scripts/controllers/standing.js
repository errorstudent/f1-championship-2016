'use strict';

/**
 * @ngdoc function
 * @name f12016App.controller:StandingCtrl
 * @description
 * # StandingCtrl
 * Controller of the f12016App
 */
 angular.module('f12016App')
 .controller('StandingListCtrl', function ($scope, $q, DriverService) {
 	var deferred = $q.defer();

 	$scope.loadingStanding = deferred.promise;
 	DriverService.find().then(function(resp){
 		var standingList = resp.MRData.StandingsTable.StandingsLists;

 		if(standingList.length > 0) {
 			$scope.standings = standingList[0];
 		}

 		deferred.resolve();
 	}, function(error) {
 		console.log(error);
 	});


 	$scope.query = {
 		order: 'position | num'
 	};
 })
 .controller('StandingDetailCtrl', function ($scope, $stateParams, $q, DriverService) {
 	var deferred = $q.defer();
 	var driverId = $stateParams.driverId;

 	// Get Driver Detail
 	$scope.loadingDriver = true;
 	DriverService.get(driverId).then(function(resp){
 		var standingList = resp.MRData.StandingsTable.StandingsLists;

 		if(standingList.length > 0) {
 			$scope.driver = standingList[0].DriverStandings[0].Driver;
 			$scope.constructors = standingList[0].DriverStandings[0].Constructors;
 		}

 		$scope.loadingDriver = false;
 	}, function(error) {
 		console.log(error);
 	});

 	// Get Races
 	$scope.promise = deferred.promise;
 	DriverService.races(driverId).then(function(resp){

 		if(resp.MRData.RaceTable.Races.length > 0) {
 			$scope.races = resp.MRData.RaceTable.Races;

 		}

 		deferred.resolve();
 	}, function(error) {
 		console.log(error);
 	});


 	$scope.query = {
 		order: 'round | num'
 	};
 });
