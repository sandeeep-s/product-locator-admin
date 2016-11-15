angular.module('productLocatorAdmin')
    .controller('appController', ['$scope','$location', function($scope, $location) {

        $scope.closeItemDetail = function() {
            alert("hello");
            $location.path("/items");
        }

    }]);
