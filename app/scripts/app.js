'use strict';

angular
  .module('kelmaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
     'KelmaService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
