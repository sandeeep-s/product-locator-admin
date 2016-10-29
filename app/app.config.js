angular.module('productLocatorAdmin')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'home.html',
        }).when('/items', {
            template: '<item-list root="$resolve.root"></item-list>',
            resolve: {
                root: function(hrRoot) {
                    return hrRoot("http://localhost:8090").follow().$promise;
                }
            }
        }).when('/items/create-item', {
            template: '<item-detail root="$resolve.root" mode="create"></item-detail>',
            resolve: {
                root: function(hrRoot) {
                    return hrRoot("http://localhost:8090").follow().$promise;
                }
            }
        }).when('/items/:itemId/edit-item', {
            template: '<item-detail root="$resolve.root" mode="edit"></item-detail>',
            resolve: {
                root: function(hrRoot) {
                    return hrRoot("http://localhost:8090").follow().$promise;
                }
            }
        }).when('/items/:itemId/view-item', {
            template: '<item-detail root="$resolve.root" mode="view"></item-detail>',
            resolve: {
                root: function(hrRoot) {
                    return hrRoot("http://localhost:8090").follow().$promise;
                }
            }
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

    });
