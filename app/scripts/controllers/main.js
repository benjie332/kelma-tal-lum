'use strict';

angular.module('kelmaApp')
  .controller('MainCtrl', ['$scope', 'Kelma', function ($scope, Kelma) {
    $scope.kelma = Kelma.latest();
  }]);
