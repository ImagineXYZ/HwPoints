// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'amplify']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

        // login
        .when('/', {
            template: '<login-directive></login-directive>',
            controller: 'loginController'
        })

        .when('/login', {
            template: '<login-directive></login-directive>',
            controller: 'loginController'
        })

        // home
        .when('/home', {
            templateUrl: './html/page-home.html',
            controller: 'homeController'
        })

        // team1
        .when('/1', {
            template: '<team1-directive></team1-directive>',
            controller: 'mainController'
        })

        // team2
        .when('/2', {
            template: '<team2-directive></team2-directive>',
            controller: 'mainController'
        })

        // team3
        .when('/3', {
            template: '<team3-directive></team3-directive>',
            controller: 'mainController'
        })

        // team4
        .when('/4', {
            template: '<team4-directive></team4-directive>',
            controller: 'mainController'
        })

        // team5
        .when('/5', {
            template: '<team5-directive></team5-directive>',
            controller: 'mainController'
        })

        // team6
        .when('/6', {
            template: '<team6-directive></team6-directive>',
            controller: 'mainController'
        })

        // team7
        .when('/7', {
            template: '<team7-directive></team7-directive>',
            controller: 'mainController'
        })

        // team8
        .when('/8', {
            template: '<team8-directive></team8-directive>',
            controller: 'mainController'
        })

        // team9
        .when('/9', {
            template: '<team9-directive></team9-directive>',
            controller: 'mainController'
        })

        // team10
        .when('/10', {
            template: '<team10-directive></team10-directive>',
            controller: 'mainController'
        })

        // team11
        .when('/11', {
            template: '<team11-directive></team11-directive>',
            controller: 'mainController'
        })

        // team12
        .when('/12', {
            template: '<team12-directive></team12-directive>',
            controller: 'mainController'
        })

        // team13
        .when('/13', {
            template: '<team13-directive></team13-directive>',
            controller: 'mainController'
        })

        // team14
        .when('/14', {
            template: '<team14-directive></team14-directive>',
            controller: 'mainController'
        })

        // contact
        .when('/done', {
            templateUrl: './html/page-done.html',
            controller: 'doneController'
        })

        // other
        .otherwise({ redirectTo: '/' });;

});


// DIRECTIVES =============================================

animateApp.directive('loginDirective', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-login.html'
  }; 
});

animateApp.directive('team1Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team1.html'
  }; 
});

animateApp.directive('team2Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team2.html'
  }; 
});  

animateApp.directive('team3Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team3.html'
  }; 
});

animateApp.directive('team4Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team4.html'
  }; 
});  

animateApp.directive('team5Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team5.html'
  }; 
});  

animateApp.directive('team6Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team6.html'
  }; 
});  

animateApp.directive('team7Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team7.html'
  }; 
});  

animateApp.directive('team8Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team8.html'
  }; 
});  

animateApp.directive('team9Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team9.html'
  }; 
});  

animateApp.directive('team10Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team10.html'
  }; 
});  

animateApp.directive('team11Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team11.html'
  }; 
});  

animateApp.directive('team12Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team12.html'
  }; 
});  

animateApp.directive('team13Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team13.html'
  }; 
});  

animateApp.directive('team14Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team14.html'
  }; 
});  

// CONTROLLERS ============================================
// login controller
animateApp.controller('loginController', function($scope, $http, $window, localStorage, $location, $rootScope) {
    $rootScope.bodylayout = 'mobile'; 
    $scope.user = {};
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-login';

    amplify.store("User", null);

    $scope.loginUser = function(){
        if($scope.user.email == $scope.user.pass){
            $scope.user['id'] = $scope.user.email;
            amplify.store("User", $scope.user);
            $location.path('home');
        }
    };
});

// home controller
animateApp.controller('homeController', function($scope, $window, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-home';

    $scope.next = function(path){
        $location.path(path);
    };
});

// main controller
animateApp.controller('mainController', function($scope, $http, $window, localStorage, $location, $timeout) {
    var user = amplify.store("User");
    if(user){
        var locationTeam = parseInt($location.path().split('/')[1]);
        $window.scrollTo(0, 0);
        $scope.pageClass = 'page-'+locationTeam;
        $scope.mobileHidden = 'hidden';
        $scope.pitchChange = function(num){
            $scope.pitchGrade = parseInt(num);
        };
        $scope.modelChange = function(num){
            $scope.modelGrade = parseInt(num);
        };
        $scope.next = function(path){
            var totalGrades = ($scope.modelGrade+$scope.pitchGrade)/2;
            var locationGrades = {modelGrade:$scope.modelGrade, pitchGrade:$scope.pitchGrade, totalGrades:totalGrades};
            var body = {judge:user.id, grades:locationGrades, team:locationTeam};
            $http.post("grade", body)
                .success(function(data, status, headers, config) {
                    $scope.data = data;
                    $location.path(path);
            }).error(function(data, status, headers, config) {
                    alert('Datos No Enviados. Por Favor Intente de Nuevo');
            });
        };
    }
    else{
        $location.path('login');
    }
});


// done page controller
animateApp.controller('doneController', function($scope) {
    amplify.store("User", null);
    $scope.pageClass = 'page-done';
});
