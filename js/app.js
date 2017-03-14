define([
		'angular','angular-route',
		'./controllers/index'
	],function(angular){
		'use strict';
		var app = angular.module('app',['ng','ngRoute','app.controllers']);
		return app.controller('MainController',['$scope',function($scope){
				$scope.mainPageLabel='首页';

		}]);
});


	// 	angular.module('ngRouteExample', ['ngRoute'])

 // .controller('MainController', function($scope, $route, $routeParams) {
 //     $scope.$route = $route;
 //     $scope.$routeParams = $routeParams;
 //     $scope.mainPageLabel='首页';
 // }).config(function($routeProvider,$locationProvider){
	// 		$routeProvider
	// 		.when('/mySeckill',{
	// 			templateUrl:'views/mySeckill.html',
	// 			controller:'mySeckillCtrl'

	// 		});
	// 	});