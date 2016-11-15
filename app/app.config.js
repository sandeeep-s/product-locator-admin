angular.module('productLocatorAdmin')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'home.html',
        }).when('/items', {
            template: '<item-list></item-list>',
        }).when('/items/create-item', {
            template: '<item-detail mode="create" on-close="closeItemDetail()"></item-detail>',
        }).when('/items/:itemId/edit-item', {
            template: '<item-detail mode="edit" on-close="closeItemDetail()"></item-detail>',
            resolve: {
                root: function(hrRoot) {
                    return hrRoot("http://localhost:8090").follow().$promise;
                }
            }
        }).when('/items/:itemId/view-item', {
            template: '<item-detail mode="view" on-close="closeItemDetail()"></item-detail>',
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
