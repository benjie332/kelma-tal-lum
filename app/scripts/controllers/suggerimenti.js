'use strict';

angular.module('kelmaTalLumApp')
    .controller('SuggerimentiController', ['$scope', 'Suggeriment', 'NotificationService', function ($scope, Suggeriment, NotificationService) {
        $scope.suggeriment = {};

        $scope.isugerixxi = function (form) {
            if (form.$valid) {
                var suggeriment = new Suggeriment({'kelma': $scope.suggeriment.kelma, 'ezempju' : $scope.suggeriment.ezempju});
                suggeriment.$save();
                NotificationService.success('Grazzi tal-kontribut tieghek');
            }
        }
    }]);
