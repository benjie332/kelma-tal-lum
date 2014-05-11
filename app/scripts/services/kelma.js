var app = angular.module('kelmaTalLumApp');

app.factory('Kelma', function ($resource) {
    return $resource('/api/kelma/:id', {'id': '@_id'},
        {
            'query': {method: 'GET', isArray: true},
            'talLum': {method: 'GET', isArray: false},
            'suggerimenti': {method: 'GET', isArray: true, params: {suggerimenti: true}}
        });
});