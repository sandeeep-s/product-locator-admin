angular.module('productLocatorAdmin')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'home.html',
        }).when('/items', {
            template: '<item-list items="$resolve.items" on-delete-item="deleteItem(item)" on-open-add-form="openAddForm()" on-open-edit-form="openEditForm(item)" on-view-item="viewItem(item)"></item-list>',
            resolve: {
                items: ['itemService', function(itemService) {
                    return itemService.fetchItems();
                }]
            }
        }).when('/items/create-item', {
            template: '<item-detail item="{}" mode="create" on-close="closeItemDetail()" on-create="createItem(item, resourceURL)"></item-detail>',
        }).when('/items/:itemId/edit-item', {
            template: '<item-detail item="$resolve.item" mode="edit" on-close="closeItemDetail()" on-update="updateItem(item, resourceURL)"></item-detail>',
            resolve: {
                item: ['$route', 'itemService', function($route, itemService) {
                    var itemId = $route.current.params.itemId
                    return itemService.fetchItem(itemId);
                }]
            }
        }).when('/items/:itemId/view-item', {
            template: '<item-detail item="$resolve.itemPromise.data" mode="view" on-close="closeItemDetail()"></item-detail>',
            resolve: {
                item: ['$route', 'itemService', function($route, itemService) {
                    var itemId = $route.current.params.itemId
                    return itemService.fetchItem(itemId);
                }]
            }
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);

    });
