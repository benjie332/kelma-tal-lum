var app = angular.module('kelmaTalLumApp');

app.factory('NotificationService', function () {
    return {
        success: function (text) {
            toastr.success(text, 'Irnexxiet');
        },
        error: function (text) {
            toastr.error(text, 'Hawn problema');
        }
    };
});