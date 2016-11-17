angular.module('item')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/items', {
            template: '<div ng-controller="itemController"><item-list items="$resolve.items" on-delete-item="deleteItem(item)" on-open-add-form="openAddForm()" on-open-edit-form="openEditForm(item)" on-view-item="viewItem(item)"></item-list></div>',
            resolve: {
                items: ['itemService', function(itemService) {
                    return itemService.fetchItems();
                }]
            }
        }).when('/items/create-item', {
            template: '<div ng-controller="itemController"><item-detail item="{}" mode="create" on-close="closeItemDetail()" on-create="createItem(item, resourceURL)"></item-detail></div>',
        }).when('/items/:itemId/edit-item', {
            template: '<div ng-controller="itemController"><item-detail item="$resolve.item" mode="edit" on-close="closeItemDetail()" on-update="updateItem(item, resourceURL)"></item-detail></div>',
            resolve: {
                item: ['$route', 'itemService', function($route, itemService) {
                    var itemId = $route.current.params.itemId
                    return itemService.fetchItem(itemId);
                }]
            }
        }).when('/items/:itemId/view-item', {
            template: '<div ng-controller="itemController"><item-detail item="$resolve.item" mode="view" on-close="closeItemDetail()"></item-detail></div>',
            resolve: {
                item: ['$route', 'itemService', function($route, itemService) {
                    var itemId = $route.current.params.itemId
                    return itemService.fetchItem(itemId);
                }]
            }
        })

        $locationProvider.html5Mode(true);

    });
