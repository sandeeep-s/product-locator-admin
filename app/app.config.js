angular.module('productLocatorAdmin')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'home.html',
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

    });
