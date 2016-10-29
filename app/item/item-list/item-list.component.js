angular.
module('item').
component('itemList', {
    templateUrl: 'item/item-list/item-list.template.html',
    controller: ['$http', '$location', function itemListController($http, $location) {
        var ctrl = this;
        this.type = this.root.$link('items');
        this.items = this.type.follow().$followAll('items');

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

        var getURLPath = function(url) {
            var el = document.createElement('a');
            el.href = url;
            return el.pathname;
        }

    }],
    bindings: {
        root: '<'
    }
});
