angular.
module('item').
component('itemList', {
    templateUrl: 'item/item-list/item-list.template.html',
    controller: ['$http', '$location', function itemListController($http, $location) {
        var ctrl = this;
        var itemsURL = "http://localhost:8090/items";

        $http.get(itemsURL).then(function(response){
            var itemsResponse = response.data;
            ctrl.items = itemsResponse._embedded.items;
        });

        this.openAddForm = function() {
            $location.path("/items/create-item");
        }

        this.openEditForm = function(item) {

            var itemUrl = item.$link('self').resolvedUrl();

            var itemUrlPath = getURLPath(itemUrl);
            $location.path(itemUrlPath + "/edit-item");
        }

        this.viewItem = function(item) {

            var itemUrl = item.$link('self').resolvedUrl();

            var itemUrlPath = getURLPath(itemUrl);
            $location.path(itemUrlPath + "/view-item");
        }

        this.deleteItem = function(item) {

            var itemUrl = item.$link('self').resolvedUrl();

            $http.delete(itemUrl);

            $location.path("/items");
        }

        this.createItem = function(item) {

            var dataObject = {
                name: item.name,
                code: item.code
            };

            $http.post(itemsURL, dataObject);

            $location.path("/items");
        };

        var getURLPath = function(url) {
            var el = document.createElement('a');
            el.href = url;
            return el.pathname;
        }

    }]
});
