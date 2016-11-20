angular.module('item')
    .controller('itemController', ['$scope', '$location', '$http', 'itemService', '$route', function($scope, $location, $http, itemService, $route) {

        $scope.closeItemDetail = function() {
            $location.path("/items");
        }

        $scope.createItem = function(item) {
            var itemCreationPromise = itemService.createItem(item);
            itemCreationPromise.then(function(result){
              $location.path("/items");
            })
        }

        $scope.updateItem = function(item) {
          var itemCreationPromise = itemService.updateItem(item);
          itemCreationPromise.then(function(result){
            $location.path("/items");
          })
        }

        $scope.deleteItem = function(item) {
          var itemCreationPromise = itemService.deleteItem(item);
          itemCreationPromise.then(function(result){
            $location.path("/items");
            $route.reload();
          })
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
