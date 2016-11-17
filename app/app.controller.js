angular.module('productLocatorAdmin')
    .controller('appController', ['$scope', '$location', '$http', function($scope, $location, $http) {

        $scope.closeItemDetail = function() {
            $location.path("/items");
        }

        $scope.createItem = function(item) {
            var resourceURL = "http://localhost:8090/items";
            var dataObject = {
                name: item.name,
                code: item.code
            };

            $http.post(resourceURL, dataObject);

            $location.path("/items");
        }

        $scope.updateItem = function(item) {

            var resourceURL = item._links.self.href;
            var dataObject = {
                name: item.name,
                code: item.code
            };

            $http.put(resourceURL, dataObject);

            $location.path("/items");
        }

        $scope.deleteItem = function(item) {

            var itemUrl = item._links.self.href;

            $http.delete(itemUrl);

            $location.path("/items");
        }

        $scope.openAddForm = function() {
            $location.path("/items/create-item");
        }

        $scope.openEditForm = function(item) {
            var itemUrlPath = getURLPath(item);
            $location.path(itemUrlPath + "/edit-item");
        }

        $scope.viewItem = function(item) {
            var itemUrlPath = getURLPath(item);
            $location.path(itemUrlPath + "/view-item");
        }

        var getURLPath = function(item) {
            var url = item._links.self.href;
            var el = document.createElement('a');
            el.href = url;
            return el.pathname;
        }

    }]);
