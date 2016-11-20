angular.module('item')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/items', {
            templateUrl: 'item/route/item-list.route.template.html',
            resolve: {
                items: ['itemService', function(itemService) {
                    return itemService.fetchItems();
                }]
            }
        }).when('/items/create-item', {
            templateUrl: 'item/route/item-detail-create.route.template.html',
        }).when('/items/:itemId/edit-item', {
            templateUrl: 'item/route/item-detail-edit.route.template.html',
            resolve: {
                item: ['$route', 'itemService', function($route, itemService) {
                    var itemId = $route.current.params.itemId
                    return itemService.fetchItem(itemId);
                }]
            }
        }).when('/items/:itemId/view-item', {
            templateUrl: 'item/route/item-detail-view.route.template.html',
            resolve: {
                item: ['$route', 'itemService', function($route, itemService) {
                    var itemId = $route.current.params.itemId
                    return itemService.fetchItem(itemId);
                }]
            }
        })

        $locationProvider.html5Mode(true);

    });
