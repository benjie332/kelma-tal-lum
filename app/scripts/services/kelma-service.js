(function(){
    var KelmaService = angular.module('KelmaService', ['ngResource']);

    KelmaService.factory('Kelma', ['$resource',
        function($resource){
            return $resource('kliem/:id', {}, {
                latest: {method:'GET', params:{id:'kelma'}, isArray:true}
            });
        }]);

})();
