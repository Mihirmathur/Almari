'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
    templateUrl: 'views/post.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
	$scope.sizes= ["XS", "S", "M", "L", "XL","OS"];
	$scope.genders = ["M","F"];
	$scope.product = {};
	$scope.categories = ["Party","Wedding","Prom", "Formal", "Cultural", 'Accessories'];
	$scope.product.imageURL = "http://www.gap.com/webcontent/0009/935/338/cn9935338.jpg";
	$scope.selectSize = function(size){
		$scope.product.size = size;
	};
	$scope.selectGender = function(gender){
		$scope.product.gender = gender;
	};
	$scope.selectCategory = function(category){
		$scope.product.category = category;
	};
}]);