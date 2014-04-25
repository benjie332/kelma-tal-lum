'use strict';

angular.module('kelmaTalLumApp')
    .controller('KelmaController', ['$scope', 'Restangular', function ($scope, Restangular) {
        /*$scope.kliem = Restangular.all('kliem').getList().$object;
        var param = 'latest';
        $scope.kelma = Restangular.one('kliem', 'query').getList({'test': 'param'}).$object;*/
        $scope.kelma = {kelma: 'KELMA', ezempju: 'Bhal meta nghidu bla bla bla', data: '2014-01-01'};
}]);
