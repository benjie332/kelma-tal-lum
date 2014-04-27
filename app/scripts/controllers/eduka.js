'use strict';

angular.module('kelmaTalLumApp')
    .controller('EdukaController', ['$scope', '$moment', 'KelmaTalLum', function ($scope, $moment, KelmaTalLum) {
        KelmaTalLum.query({data: $moment().toISOString()}, function(kelma) {
            if (kelma) {
                $scope.kelma = {kelma : kelma._id, ezempju: kelma.ezempju, data: $moment(kelma.data).format('YYYY-MM-DD')};
            } else {
                $scope.kelma = {};
            }

        });
}]);
