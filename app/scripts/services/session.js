'use strict';

angular.module('kelmaTalLumApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
