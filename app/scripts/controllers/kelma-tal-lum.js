'use strict';

angular.module('kelmaTalLumApp')
    .controller('KelmaController', ['$scope', 'KelmaTalLum', function ($scope, KelmaTalLum) {
        /*$scope.kliem = Restangular.all('kliem').getList().$object;
        var param = 'latest';
        $scope.kelma = Restangular.one('kliem', 'query').getList({'test': 'param'}).$object;*/
        //$scope.kelma = {kelma: 'KELMA', ezempju: 'Bhal meta nghidu bla bla bla', data: '2014-01-01'};
        KelmaTalLum.query(function(kelma) {
            console.log(kelma);
            //$scope.kelma = kelma[0];
        });
}]);
