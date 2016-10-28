angular.module('productLocatorAdmin')
.config(function($routeProvider) {

    $routeProvider.when('/', {
        template: '<item-list root="$resolve.root"></item-list>',
        resolve: {
            root: function(hrRoot) {
                return hrRoot("http://localhost:8090").follow().$promise;
            }
        }
    }).otherwise({
        redirectTo: '/'
    });

});
