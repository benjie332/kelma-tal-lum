'use strict';

angular.module('kelmaTalLumApp')
    .controller('KelmaController', ['$scope', '$moment', 'Kelma', function ($scope, $moment, Kelma) {
        Kelma.talLum({data: $moment().toISOString()}, function(kelma) {
            if (kelma._id) {
                $scope.kelma = {id: kelma._id, kelma : kelma.kelma, ezempju: kelma.ezempju, data: $moment(kelma.data).format('YYYY-MM-DD')};
            } else {
                $scope.kelma = {};
            }
        });
}]);
