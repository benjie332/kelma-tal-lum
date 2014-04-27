'use strict';

angular.module('kelmaTalLumApp')
    .controller('EdukaController', ['$scope', '$moment', 'Suggeriment', 'Kelma', 'KelmaTalLum', function ($scope, $moment, Suggeriment, Kelma, KelmaTalLum) {

        $scope.kliem = [];

        KelmaTalLum.query({}, function(kelma) {
            $scope.kelmaTalLum = kelma;
        });
        Suggeriment.query({}, function(suggerimenti) {
            console.log(suggerimenti);
            $scope.suggerimenti = suggerimenti;
            //TODO: gib il-Kelma ta kull Suggeriment, halli nkunu nistaw napprovawhom iktar tard
            //TODO (kill off suggeriment, make GET be able to query effectively)
            /*angular.forEach(suggerimenti, function(suggeriment){
                Kelma.query({_id: suggeriment._id}, function(kelma){
                    console.log(kelma);
                });
                //$scope.kliem.push()
            });*/
        });

        $scope.ilKandidat = {};

        $scope.nikkontemplaw = function(suggeriment) {
            $scope.ilKandidat = suggeriment;
        };

        $scope.eduka = function() {
            console.log($scope.ilKandidat);
            //$scope.ilKandidat.$save();
        };
}]);
