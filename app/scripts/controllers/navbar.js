'use strict';

angular.module('kelmaTalLumApp')
    .controller('NavbarCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {

        $scope.message = '';

        $scope.logout = function () {
            Auth.logout()
                .then(function () {
                    $location.path('/');
                });
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.$on('event:success', function(event, message) {
            $scope.message = message;
        });
    }]);
