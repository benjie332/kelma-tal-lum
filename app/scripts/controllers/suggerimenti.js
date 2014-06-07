'use strict';

angular.module('kelmaTalLumApp')
    .controller('SuggerimentiController', ['$scope', 'Kelma', 'NotificationService', function ($scope, Kelma, NotificationService) {
        $scope.suggeriment = {};

        $scope.isugerixxi = function (form) {
            if (form.$valid && !angular.equals($scope.suggeriment, {})) {
                var suggeriment = new Kelma({'kelma': $scope.suggeriment.kelma, 'ezempju' : $scope.suggeriment.ezempju});
                suggeriment.$save();       
                //TODO: have this actually check to see if the save worked (eg 404s)
                NotificationService.success('Grazzi tal-kontribut tieghek. Il-kelma '+$scope.suggeriment.kelma+' qed tigi diskussa fil-Kumitat');
                $scope.suggeriment = {};
            }
        };
    }]);
