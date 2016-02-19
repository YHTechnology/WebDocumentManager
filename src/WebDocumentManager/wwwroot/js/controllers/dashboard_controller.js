angular.module('App').controller('DashboardController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function(){
        App.initAjac();
    });
    
    alert('Hello world!');
    
});