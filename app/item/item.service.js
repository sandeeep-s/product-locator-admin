angular.module('item')
    .factory('itemService', ['$http', function($http) {
        return {
            fetchItems: function() {
                var itemsURL = "http://localhost:8090/items";
                return $http.get(itemsURL).then(function(response) {
                    var itemsResponse = response.data;
                    return itemsResponse._embedded.items;
                });
            },

            fetchItem: function(itemId) {
              var itemBaseUrl = "http://localhost:8090/items";
              var itemUrl = itemBaseUrl + '/' + itemId;
              return $http.get(itemUrl).then(function(response) {
                  return response.data;
              });
            },
        };
    }]);
