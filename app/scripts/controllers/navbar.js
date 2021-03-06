'use strict';

angular.module('kelmaTalLumApp')
    .controller('NavbarCtrl', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {

        $scope.logout = function () {
            Auth.logout()
                .then(function () {
                    $location.path('/');
                });
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }]);
