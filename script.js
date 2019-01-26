var myApp = angular.module("myModule",[]);
var myController = function($scope){
	$scope.message = "AngularJS";
}
myApp.controller("myController",myController);