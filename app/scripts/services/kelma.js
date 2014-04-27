var app = angular.module('kelmaTalLumApp');

app.factory('Kelma', function($resource) {
    return $resource('/api/kelma/',  {}, {'query': {method: 'GET', isArray: true}});
});

app.factory("KelmaTalLum", function($resource) {
    return $resource("/api/illum",  {}, {'query': {method: 'GET', isArray: false}});
});

app.factory("Suggeriment", function($resource) {
    return $resource("/api/suggeriment");
});

