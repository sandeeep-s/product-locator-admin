angular.module('item')
    .component('itemDetail', {
        bindings: {
            mode: '@',
            onClose: '&'
        },
        templateUrl: 'item/item-detail/item-detail.template.html',
        controller: ['$http', '$location', '$routeParams', function itemDetailController($http, $location, $routeParams) {
            var ctrl = this;

            var itemsUrl = "http://localhost:8090/items";

            ctrl.editMode = true;
            if ("edit" == this.mode) {
                var itemUrl = itemsUrl + '/' + $routeParams.itemId;
                ctrl.resourceURL = itemUrl;
                $http.get(itemUrl).then(function(response) {
                    ctrl.item = response.data;
                });
            } else if ("view" == this.mode) {
                ctrl.editMode = false;
                var itemUrl = itemsUrl + '/' + $routeParams.itemId;
                ctrl.resourceURL = itemUrl;
                $http.get(itemUrl).then(function(response) {
                    ctrl.item = response.data;
                });
            } else if ("create" == this.mode) {
                ctrl.resourceURL = itemsUrl;
                this.item = {};
            }

            this.createItem = function(resourceURL) {

                var dataObject = {
                    name: ctrl.item.name,
                    code: ctrl.item.code
                };

                $http.post(resourceURL, dataObject);

                ctrl.onClose();
            };

            this.updateItem = function(resourceURL) {

                var dataObject = {
                    name: ctrl.item.name,
                    code: ctrl.item.code
                };

                $http.put(resourceURL, dataObject);

                $location.path("/items");
            };

            this.cancel = function() {
                $location.path("/items");
            };

        }]
    });
