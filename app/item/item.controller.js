angular.module('item')
    .controller('itemController', ['$scope', '$location', '$http', 'itemService', function($scope, $location, $http, itemService) {

        $scope.closeItemDetail = function() {
            $location.path("/items");
        }

        $scope.createItem = function(item) {
            itemService.createItem(item);
            $location.path("/items");
        }

        $scope.updateItem = function(item) {
            itemService.updateItem(item);
            $location.path("/items");
        }

        $scope.deleteItem = function(item) {
            itemService.deleteItem(item);
            $location.path("/items");
        }

        $scope.openAddForm = function() {
            $location.path("/items/create-item");
        }

        $scope.openEditForm = function(item) {
            var itemUrlPath = itemService.getItemURLPath(item);
            $location.path(itemUrlPath + "/edit-item");
        }

        $scope.viewItem = function(item) {
            var itemUrlPath = itemService.getItemURLPath(item);
            $location.path(itemUrlPath + "/view-item");
        }

    }]);
