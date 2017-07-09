// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'amplify']);
var totalGrades = {};
var judgesGrades = {};
var teamsArray = [1,2,3,4,5,6,7,8,9,10,11];
var teamNow = 0;
var juryQuantity = 3;

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

        // team15
        .when('/15', {
            template: '<team15-directive></team15-directive>',
            controller: 'mainController'
        })

        // team16
        .when('/16', {
            template: '<team16-directive></team16-directive>',
            controller: 'mainController'
        })

        // team17
        .when('/17', {
            template: '<team17-directive></team17-directive>',
            controller: 'mainController'
        })

        // team18
        .when('/18', {
            template: '<team18-directive></team18-directive>',
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

animateApp.directive('team15Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team15.html'
  }; 
});  

animateApp.directive('team16Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team16.html'
  }; 
});  

animateApp.directive('team17Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team17.html'
  }; 
});  

animateApp.directive('team18Directive', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: './html/page-team18.html'
  }; 
});  

// CONTROLLERS ============================================
// login controller
animateApp.controller('loginController', function($scope, $http, $window, localStorage, $location, $rootScope) {
    totalGrades = {};
    teamsArray = [1,2,3,4,5,6,7,8,9,10,11];
    $rootScope.bodylayout = 'mobile'; 
    $scope.user = {};
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-login';

    amplify.store("User", null);

    $scope.loginUser = function(){
        if($scope.user.email == "bmurray" && $scope.user.pass == "bmurray"){
            $scope.user['id'] = 1;
            amplify.store("User", $scope.user);
            $location.path('home');
        }
        else if($scope.user.email == "mcoffey" && $scope.user.pass == "mcoffey"){
            $scope.user['id'] = 2;
            amplify.store("User", $scope.user);
            $location.path('home');
        }
        else if($scope.user.email == "eoviedo" && $scope.user.pass == "eoviedo"){
            $scope.user['id'] = 3;
            amplify.store("User", $scope.user);
            $location.path('home');
        }
        else if($scope.user.email == "ofuks" && $scope.user.pass == "ofuks"){
            $scope.user['id'] = 4;
            amplify.store("User", $scope.user);
            $location.path('home');
        }
        else{
            alert('Usuario o contraseña erroneas;');
        }
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
        $window.scrollTo(0, 0);
        $scope.pageClass = 'page-'+locationTeam;
        //if($window.orientation === undefined){
            $scope.mobileHidden = 'hidden';
        /*}
        else{
            $scope.pcHidden = 'hidden';   
        }*/
        $scope.modelGrade = 1;
        $scope.pitchGrade = 1;
        $scope.impactGrade = 1;
        $scope.innovationGrade = 1;
        $scope.functionalGrade = 1;
        $scope.getGrade = function(selector){
            switch(selector){
                case 1:
                    return $scope.modelGrade;
                    break;
                case 2:
                    return $scope.pitchGrade;
                    break;
                case 3:
                    return $scope.impactGrade;
                    break;
                case 4:
                    return $scope.innovationGrade;
                    break;
                case 5:
                    return $scope.functionalGrade;
                    break;
                default:
                    return 1;
            }
        };
        $scope.setGrade = function(grade, selector){
            switch(selector){
                case 1:
                    $scope.modelGrade = grade;
                    break;
                case 2:
                    $scope.pitchGrade = grade;
                    break;
                case 3:
                    $scope.impactGrade = grade;
                    break;
                case 4:
                    $scope.innovationGrade = grade;
                    break;
                case 5:
                    $scope.functionalGrade = grade;
                    break;
                default:
                    return 1;
            }
        };

        $scope.isRange = function(number, selector){
            switch(selector){
                case 1:
                    return number === $scope.modelGrade;
                    break;
                case 2:
                    return number === $scope.pitchGrade;
                    break;
                case 3:
                    return number === $scope.impactGrade;
                    break;
                case 4:
                    return number === $scope.innovationGrade;
                    break;
                case 5:
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
                    $scope.modelGrade = pos;
                    break;
                case 2:
                    $scope.pitchGrade = pos;
                    break;
                case 3:
                    $scope.impactGrade = pos;
                    break;
                case 4:
                    $scope.innovationGrade = pos;
                    break;
                case 5:
                    $scope.functionalGrade = pos;
                    break;
                default:
                    return false;
            }
        };
        $scope.next = function(path){
            var locationGrades = {modelGrade:$scope.modelGrade, pitchGrade:$scope.pitchGrade, impactGrade:$scope.impactGrade, innovationGrade:$scope.innovationGrade, functionalGrade:$scope.functionalGrade,totalGrade:($scope.modelGrade + $scope.pitchGrade + $scope.impactGrade + $scope.innovationGrade + $scope.functionalGrade),percentageGrade:($scope.modelGrade + $scope.pitchGrade + $scope.impactGrade + $scope.innovationGrade + $scope.functionalGrade)*2,judgeGrade:(($scope.modelGrade + $scope.pitchGrade + $scope.impactGrade + $scope.innovationGrade + $scope.functionalGrade)*1.6)/juryQuantity};
            totalGrades[locationTeam]=locationGrades;
            judgesGrades[locationTeam] = locationGrades.judgeGrade;
            if(teamsArray.length === 0){
                user['grades'] = totalGrades;
                user['judge'] = judgesGrades;
                var body = {user:user, grades:totalGrades, judge:judgesGrades};
                $http.post("grade", body)
                    .success(function(data, status, headers, config) {
                        $scope.data = data;
                        $location.path('done');
                }).error(function(data, status, headers, config) {
                        alert('Datos No Enviados. Por Favor Intente de Nuevo');
                });
            }
            else{
                teamNow = teamsArray.shift();
                var nextPath = ''+teamNow+'';
                $location.path(nextPath);
            }
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
