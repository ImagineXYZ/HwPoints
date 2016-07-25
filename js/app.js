// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'amplify']);
var totalGrades = {};
var teamsArray = [1,2,3,4,5,6,7,8,9,10,11];
var teamNow = 0;
var userTeam = 0;

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

// CONTROLLERS ============================================
// login controller
animateApp.controller('loginController', function($scope, $http, $window, localStorage, $location, $rootScope) {
    totalGrades = {};
    teamsArray = [1,2,3,4,5,6,7,8,9,10,11];
    userTeam = 0;
    if($window.orientation === undefined){}
    else{
        $rootScope.bodylayout = 'mobile'; 
    }
    $scope.user = {};
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-login';

    amplify.store("User", null);

    $scope.loginUser = function(){
        console.log($scope.user);
        $http.post("login", $scope.user)
            .success(function(data, status, headers, config) {
                if(data.sent === 0){
                    console.log(data);
                    $scope.data = data;
                    userTeam = data.team;
                    teamsArray.splice(userTeam-1,1);
                    data.team = '¿?';
                    amplify.store("User", data);
                    $location.path('home');
                }
                else{
                    console.log(data);
                    $scope.user = {};
                    alert('Éste usuario ya realizó la calificación.');
                }
        }).error(function(data, status, headers, config) {
                console.log(data);
                alert('Datos Erroneos.');
                $scope.status = status;
        });
    };
});

// home controller
animateApp.controller('homeController', function($scope, $window, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-home';

    $scope.next = function(path){
        teamNow = teamsArray.shift();
        var nextPath = ''+teamNow+'';
        $location.path(nextPath);
    };
});

// main controller
animateApp.controller('mainController', function($scope, $http, $window, localStorage, $location, $timeout) {
    var user = amplify.store("User");
    if(user){
        var locationTeam = parseInt($location.path().split('/')[1]);
        if(locationTeam === userTeam){
            alert('HACER TRAMPA ES MALO -.-');
            var nextPath = ''+teamNow+'';
            $location.path(nextPath);
        }
        else if(locationTeam < teamNow){
            alert('No es posible modificar una calificación ya guardada');
            var nextPath = ''+teamNow+'';
            $location.path(nextPath);
            $timeout(function () {
                $window.scrollTo(0, 0);
            }, 500);
        }
        else{
            $window.scrollTo(0, 0);
            $scope.pageClass = 'page-'+locationTeam;
            if($window.orientation === undefined){
                $scope.mobileHidden = 'hidden';
            }
            else{
                $scope.pcHidden = 'hidden';   
            }
            $scope.attitudeGrade = 1;
            $scope.dataGrade = 1;
            $scope.videoGrade = 1;
            $scope.functionalGrade = 1;
            $scope.getGrade = function(selector){
                switch(selector){
                    case 1:
                        return $scope.attitudeGrade;
                        break;
                    case 2:
                        return $scope.dataGrade;
                        break;
                    case 3:
                        return $scope.videoGrade;
                        break;
                    case 4:
                        return $scope.functionalGrade;
                        break;
                    default:
                        return 1;
                }
            };
            $scope.setGrade = function(grade, selector){
                switch(selector){
                    case 1:
                        $scope.attitudeGrade = grade;
                        break;
                    case 2:
                        $scope.dataGrade = grade;
                        break;
                    case 3:
                        $scope.videoGrade = grade;
                        break;
                    case 4:
                        $scope.functionalGrade = grade;
                        break;
                    default:
                        return 1;
                }
            };

            $scope.isRange = function(number, selector){
                switch(selector){
                    case 1:
                        return number === $scope.attitudeGrade;
                        break;
                    case 2:
                        return number === $scope.dataGrade;
                        break;
                    case 3:
                        return number === $scope.videoGrade;
                        break;
                    case 4:
                        return number === $scope.functionalGrade;
                        break;
                    default:
                        return false;
                }
            };
            $scope.rangeCheck = function(event, selector){
                var pos = Math.ceil(event.offsetX / (545 / 10));
                switch(selector){
                    case 1:
                        $scope.attitudeGrade = pos;
                        break;
                    case 2:
                        $scope.dataGrade = pos;
                        break;
                    case 3:
                        $scope.videoGrade = pos;
                        break;
                    case 4:
                        $scope.functionalGrade = pos;
                        break;
                    default:
                        return false;
                }
            };
            $scope.next = function(path){
                var locationGrades = {attitudeGrade:$scope.attitudeGrade/2, dataGrade:$scope.dataGrade/2, videoGrade:$scope.videoGrade/2, functionalGrade:$scope.functionalGrade, totalGrade:($scope.attitudeGrade/2 + $scope.dataGrade/2 + $scope.videoGrade/2 + $scope.functionalGrade)};
                totalGrades[locationTeam]=locationGrades;
                if(teamsArray.length === 0){
                    user['grades'] = totalGrades;
                    var body = {user:user, grades:totalGrades};
                    $http.post("grade", body)
                        .success(function(data, status, headers, config) {
                            $scope.data = data;
                            alert('Datos Enviados.');
                            $location.path('done');
                    }).error(function(data, status, headers, config) {
                            if(status){
                                alert('Éste usuario ya envió su calificación');
                                $location.path('login');
                            }
                            else{
                                alert('Datos No Enviados. Por Favor Intente de Nuevo');
                            }
                    });
                }
                else{
                    teamNow = teamsArray.shift();
                    var nextPath = ''+teamNow+'';
                    $location.path(nextPath);
                }
            };
        }
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

/*
Quitar Items
Constantes de Materiales por Item

Auxiliar Presupuesto
-Totalidad Materiales
    -Mano Obra
    -Costo Materiales
-Resumen de Presupuesto
    -Cargas Sociales 0.43 por Mano de Obra por Contratos
    -Miscelaneos 
*/