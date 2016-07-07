// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'amplify']);
var totalGrades = {};
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
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })

        // magnetos
        .when('/magnetos', {
            template: '<magnetos-directive></magnetos-directive>',
            controller: 'magnetosController'
        })

        // mechudos
        .when('/mechudos', {
            template: '<mechudos-directive></mechudos-directive>',
            controller: 'mechudosController'
        })

        // tonticos
        .when('/tonticos', {
            template: '<tonticos-directive></tonticos-directive>',
            controller: 'tonticosController'
        })

        // recolectores
        .when('/recolectores', {
            template: '<recolectores-directive></recolectores-directive>',
            controller: 'recolectoresController'
        })

        // contact
        .when('/done', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        });

});


// DIRECTIVES =============================================

animateApp.directive('loginDirective', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'page-login.html'
  }; 
});

animateApp.directive('magnetosDirective', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'page-magnetos.html'
  }; 
});

animateApp.directive('mechudosDirective', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'page-mechudos.html'
  }; 
});  

animateApp.directive('tonticosDirective', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'page-tonticos.html'
  }; 
});

animateApp.directive('recolectoresDirective', function () {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'page-recolectores.html'
  }; 
});  

// CONTROLLERS ============================================
// login controller
animateApp.controller('loginController', function($scope, $http, $window, localStorage, $location, $rootScope) {
    if($window.orientation === undefined){}
    else{
        $rootScope.bodylayout = 'mobile'; 
    }
    $scope.user = {};
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-login';

    amplify.store("User", null);
    
    $scope.next = function(path){
        $location.path(path);
    };

    $scope.addReview = function(path){
        $http.post("login", $scope.user)
            .success(function(data, status, headers, config) {
                console.log(data);
                $scope.data = data;
                amplify.store("User", data);
                $location.path('home');
        }).error(function(data, status, headers, config) {
                alert('Datos Erroneos.');
                $scope.status = status;
        });
        //$location.path(path);
    };
});

// home controller
animateApp.controller('mainController', function($scope, $window, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-home';

    $scope.next = function(path){
        $location.path(path);
    };
});

// magnetos controller
animateApp.controller('magnetosController', function($scope, $window, localStorage, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-magnetos';
    //localStorage.save('logged', {name:'Yeah'});
    //console.log(localStorage.retrieve('logged'));
    if($window.orientation === undefined){
        $scope.mobileHidden = 'hidden';
    }
    else{
        $scope.pcHidden = 'hidden';   
    }
    $scope.grade1 = 1;
    $scope.grade2 = 1;
    $scope.grade3 = 1;
    $scope.grade4 = 1;
    $scope.getGrade = function(selector){
        switch(selector){
            case 1:
                return $scope.grade1;
                break;
            case 2:
                return $scope.grade2;
                break;
            case 3:
                return $scope.grade3;
                break;
            case 4:
                return $scope.grade4;
                break;
            default:
                return 1;
        }
    };
    $scope.setGrade = function(grade, selector){
        switch(selector){
            case 1:
                $scope.grade1 = grade;
                break;
            case 2:
                $scope.grade2 = grade;
                break;
            case 3:
                $scope.grade3 = grade;
                break;
            case 4:
                $scope.grade4 = grade;
                break;
            default:
                return 1;
        }
    };

    $scope.isRange = function(number, selector){
        switch(selector){
            case 1:
                return number === $scope.grade1;
                break;
            case 2:
                return number === $scope.grade2;
                break;
            case 3:
                return number === $scope.grade3;
                break;
            case 4:
                return number === $scope.grade4;
                break;
            default:
                return false;
        }
    };
    $scope.rangeCheck = function(event, selector){
        var pos = Math.ceil(event.offsetX / (545 / 10));
        switch(selector){
            case 1:
                $scope.grade1 = pos;
                break;
            case 2:
                $scope.grade2 = pos;
                break;
            case 3:
                $scope.grade3 = pos;
                break;
            case 4:
                $scope.grade4 = pos;
                break;
            default:
                return false;
        }
    };
    $scope.next = function(path){
        var magnetosGrades = {grade1:$scope.grade1, grade2:$scope.grade2, grade3:$scope.grade3, grade4:$scope.grade4};
        totalGrades['magnetos']=magnetosGrades;
        $location.path(path);
    };
});

// mechudos controller
animateApp.controller('mechudosController', function($scope, $window, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-mechudos';
    if($window.orientation === undefined){
        $scope.mobileHidden = 'hidden';
    }
    else{
        $scope.pcHidden = 'hidden';   
    }
    $scope.grade1 = 1;
    $scope.grade2 = 1;
    $scope.grade3 = 1;
    $scope.grade4 = 1;
    $scope.getGrade = function(selector){
        switch(selector){
            case 1:
                return $scope.grade1;
                break;
            case 2:
                return $scope.grade2;
                break;
            case 3:
                return $scope.grade3;
                break;
            case 4:
                return $scope.grade4;
                break;
            default:
                return 1;
        }
    };
    $scope.setGrade = function(grade, selector){
        switch(selector){
            case 1:
                $scope.grade1 = grade;
                break;
            case 2:
                $scope.grade2 = grade;
                break;
            case 3:
                $scope.grade3 = grade;
                break;
            case 4:
                $scope.grade4 = grade;
                break;
            default:
                return 1;
        }
    };
    $scope.isRange = function(number, selector){
        switch(selector){
            case 1:
                return number === $scope.grade1;
                break;
            case 2:
                return number === $scope.grade2;
                break;
            case 3:
                return number === $scope.grade3;
                break;
            case 4:
                return number === $scope.grade4;
                break;
            default:
                return false;
        }
    };
    $scope.rangeCheck = function(event, selector){
        var pos = Math.ceil(event.offsetX / (545 / 10));
        switch(selector){
            case 1:
                $scope.grade1 = pos;
                break;
            case 2:
                $scope.grade2 = pos;
                break;
            case 3:
                $scope.grade3 = pos;
                break;
            case 4:
                $scope.grade4 = pos;
                break;
            default:
                return false;
        }
    };
    $scope.next = function(path){
        var mechudosGrades = {grade1:$scope.grade1, grade2:$scope.grade2, grade3:$scope.grade3, grade4:$scope.grade4};
        totalGrades['mechudos']=mechudosGrades;
        $location.path(path);
    };
});

// tonticos controller
animateApp.controller('tonticosController', function($scope, $window, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-tonticos';
    if($window.orientation === undefined){
        $scope.mobileHidden = 'hidden';
    }
    else{
        $scope.pcHidden = 'hidden';   
    }
    $scope.grade1 = 1;
    $scope.grade2 = 1;
    $scope.grade3 = 1;
    $scope.grade4 = 1;
    $scope.getGrade = function(selector){
        switch(selector){
            case 1:
                return $scope.grade1;
                break;
            case 2:
                return $scope.grade2;
                break;
            case 3:
                return $scope.grade3;
                break;
            case 4:
                return $scope.grade4;
                break;
            default:
                return 1;
        }
    };
    $scope.setGrade = function(grade, selector){
        switch(selector){
            case 1:
                $scope.grade1 = grade;
                break;
            case 2:
                $scope.grade2 = grade;
                break;
            case 3:
                $scope.grade3 = grade;
                break;
            case 4:
                $scope.grade4 = grade;
                break;
            default:
                return 1;
        }
    };

    $scope.isRange = function(number, selector){
        switch(selector){
            case 1:
                return number === $scope.grade1;
                break;
            case 2:
                return number === $scope.grade2;
                break;
            case 3:
                return number === $scope.grade3;
                break;
            case 4:
                return number === $scope.grade4;
                break;
            default:
                return false;
        }
    };
    $scope.rangeCheck = function(event, selector){
        var pos = Math.ceil(event.offsetX / (545 / 10));
        switch(selector){
            case 1:
                $scope.grade1 = pos;
                break;
            case 2:
                $scope.grade2 = pos;
                break;
            case 3:
                $scope.grade3 = pos;
                break;
            case 4:
                $scope.grade4 = pos;
                break;
            default:
                return false;
        }
    };
    $scope.next = function(path){
        var tonticosGrades = {grade1:$scope.grade1, grade2:$scope.grade2, grade3:$scope.grade3, grade4:$scope.grade4};
        totalGrades['tonticos']=tonticosGrades;
        $location.path(path);
    };
});

// recolectores controller
animateApp.controller('recolectoresController', function($scope, $http, $window, localStorage, $location) {
    $window.scrollTo(0, 0);
    $scope.pageClass = 'page-recolectores';
    if($window.orientation === undefined){
        $scope.mobileHidden = 'hidden';
    }
    else{
        $scope.pcHidden = 'hidden';   
    }
    $scope.grade1 = 1;
    $scope.grade2 = 1;
    $scope.grade3 = 1;
    $scope.grade4 = 1;
    $scope.getGrade = function(selector){
        switch(selector){
            case 1:
                return $scope.grade1;
                break;
            case 2:
                return $scope.grade2;
                break;
            case 3:
                return $scope.grade3;
                break;
            case 4:
                return $scope.grade4;
                break;
            default:
                return 1;
        }
    };
    $scope.setGrade = function(grade, selector){
        switch(selector){
            case 1:
                $scope.grade1 = grade;
                break;
            case 2:
                $scope.grade2 = grade;
                break;
            case 3:
                $scope.grade3 = grade;
                break;
            case 4:
                $scope.grade4 = grade;
                break;
            default:
                return 1;
        }
    };

    $scope.isRange = function(number, selector){
        switch(selector){
            case 1:
                return number === $scope.grade1;
                break;
            case 2:
                return number === $scope.grade2;
                break;
            case 3:
                return number === $scope.grade3;
                break;
            case 4:
                return number === $scope.grade4;
                break;
            default:
                return false;
        }
    };
    $scope.rangeCheck = function(event, selector){
        var pos = Math.ceil(event.offsetX / (545 / 10));
        switch(selector){
            case 1:
                $scope.grade1 = pos;
                break;
            case 2:
                $scope.grade2 = pos;
                break;
            case 3:
                $scope.grade3 = pos;
                break;
            case 4:
                $scope.grade4 = pos;
                break;
            default:
                return false;
        }
    };
    $scope.next = function(path){
        var recolectoresGrades = {grade1:$scope.grade1, grade2:$scope.grade2, grade3:$scope.grade3, grade4:$scope.grade4};
        totalGrades['recolectores']=recolectoresGrades;
        var user = amplify.store("User");
        console.log(user);
        $http.post("grade", totalGrades)
            .success(function(data, status, headers, config) {
                console.log(data);
                $scope.data = data;
                alert('Datos Enviados.');
                //amplify.store("User", data);
                $location.path('done');
        }).error(function(data, status, headers, config) {
                alert('Datos No Enviados. Por Favor Intente de Nuevo');
                $scope.status = status;
        });
        //$location.path(path);
    };
});

// contact page controller
animateApp.controller('contactController', function($scope) {
    console.log(totalGrades);
    $scope.pageClass = 'page-contact';
});