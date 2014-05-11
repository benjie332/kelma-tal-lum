'use strict';

angular.module('kelmaTalLumApp')
    .controller('EdukaController', ['$scope', '$moment', 'Kelma', 'NotificationService', function ($scope, $moment, Kelma, NotificationService) {

        $scope.kliem = [];
        $scope.ilKandidat = {};

        Kelma.talLum({data: $moment().toISOString()}, function(kelma) {
            $scope.kelmaTalLum = kelma;
        });

        Kelma.suggerimenti({}, function(suggerimenti) {
            $scope.suggerimenti = suggerimenti;
        });

        $scope.nikkontemplaw = function(suggeriment) {
            $scope.ilKandidat = suggeriment;
        };

        $scope.eduka = function() {
            $scope.ilKandidat.data = Date.now();
            $scope.ilKandidat.$save();
            NotificationService.success('Il-Poplu ghad jirringrazzjak tal-ghazla tieghek');
        };
}]);
