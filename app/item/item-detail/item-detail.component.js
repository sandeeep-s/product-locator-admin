angular.module('item')
    .component('itemDetail', {
        templateUrl: 'item/item-detail/item-detail.template.html',
        controller: ['$http', '$location', '$routeParams', function itemDetailController($http, $location, $routeParams) {
            var ctrl = this;
            this.type = this.root.$link('items');

            //    alert(this.mode);

            ctrl.editMode = true;
            if ("edit" == this.mode) {
                var itemUrl = this.type.resolvedUrl() + '/' + $routeParams.itemId;
                ctrl.resourceURL = itemUrl;
                $http.get(itemUrl).then(function(response) {
                    ctrl.item = response.data;
                });
            } else if ("view" == this.mode) {
                ctrl.editMode = false;
                var itemUrl = this.type.resolvedUrl() + '/' + $routeParams.itemId;
                ctrl.resourceURL = itemUrl;
                $http.get(itemUrl).then(function(response) {
                    ctrl.item = response.data;
                });
            } else if ("create" == this.mode) {
                ctrl.resourceURL = this.type.resolvedUrl();
                this.item = {};
            }

            this.createItem = function(resourceURL) {

                var dataObject = {
                    name: ctrl.item.name,
                    code: ctrl.item.code
                };

                $http.post(resourceURL, dataObject);

                $location.path("/");
            };

            this.updateItem = function(resourceURL) {

                var dataObject = {
                    name: ctrl.item.name,
                    code: ctrl.item.code
                };

                $http.put(resourceURL, dataObject);

                $location.path("/");
            };

        }],
        bindings: {
            root: '<',
            mode: '@'
        }
    });
