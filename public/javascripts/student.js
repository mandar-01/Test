		var app = angular.module("myApp",[]);

app.controller('MainCtrl',function($scope){
	$scope.posts = [];
	$scope.data = {name:'',roll:''};

	$scope.post = function(){
    $scope.posts.push($scope.data);
    $scope.data = {name:'' , roll:''};      
	};

});

