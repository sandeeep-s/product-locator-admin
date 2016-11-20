angular.module('item')
    .factory('itemService', ['$http', function($http) {
        return {
            fetchItems: function() {
                var itemsURL = this.getItemBaseURL();
                return $http.get(itemsURL).then(function(response) {
                    var itemsResponse = response.data;
                    return itemsResponse._embedded.items;
                });
            },

            fetchItem: function(itemId) {
                var itemBaseUrl = this.getItemBaseURL();
                var itemUrl = itemBaseUrl + '/' + itemId;
                return $http.get(itemUrl).then(function(response) {
                    return response.data;
                });
            },

            createItem: function(item) {
                var resourceURL = this.getItemBaseURL();
                var dataObject = {
                    name: item.name,
                    code: item.code
                };

                $http.post(resourceURL, dataObject);
            },

            updateItem: function(item) {

                var resourceURL = this.getItemURL(item);
                var dataObject = {
                    name: item.name,
                    code: item.code
                };

                $http.put(resourceURL, dataObject);
            },

            deleteItem: function(item) {

                var itemUrl = this.getItemURL(item);
                $http.delete(itemUrl);
            },

            getItemURLPath: function(item) {

                var url = item._links.self.href;
                var el = document.createElement('a');
                el.href = url;
                return el.pathname;
            },

            getItemURL: function(item) {

                var url = item._links.self.href;
                return url;
            },

            getItemBaseURL: function() {
                return "http://localhost:8090/items";
            }

        };
    }]);
