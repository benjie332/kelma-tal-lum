'use strict';

angular.module('kelmaTalLumApp')
    .controller('EdukaController', ['$scope', '$moment', 'Kelma', 'NotificationService', function ($scope, $moment, Kelma, NotificationService) {

        $scope.kliem = [];
        $scope.ilKandidat = {};
        $scope.kelmaTalLum = null;

        Kelma.talLum({data: $moment().toISOString()}, function (kelma) {
            console.log('kelma', kelma);
            //TODO: have a factory or something do this somewhere centralised - its duplicated in the main page
            if (kelma._id) {
                $scope.kelmaTalLum = kelma;
            } else {
                $scope.kelmaTalLum = null;
            }
        });

        Kelma.suggerimenti({}, function (suggerimenti) {
            $scope.suggerimenti = suggerimenti;
        });

        $scope.nikkontemplaw = function (suggeriment) {
            $scope.ilKandidat = suggeriment;
        };

        $scope.eduka = function () {
            $scope.ilKandidat.data = Date.now();
            $scope.ilKandidat.$save(function () {
                    Kelma.suggerimenti({}, function (suggerimenti) {
                        $scope.suggerimenti = suggerimenti;
                    });
                    $scope.kelmaTalLum = $scope.ilKandidat;
                    $scope.ilKandidat = {};
                    NotificationService.success('Il-Poplu ghad jirringrazzjak tal-ghazla tieghek');
                }, function (err) {
                    NotificationService.error(err);
                }
            );

        };

        $scope.irranga = function (suggeriment) {
            suggeriment.$save();
        }
    }]);
