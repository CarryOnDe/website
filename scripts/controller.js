(function () {
    var app = angular.module('app', []);

    app.controller('main-controller', function ($scope, $http) {
        //$http.get()
        $scope.data = {
            singleSelect: null,
            option1: 'option-1',
            option2: 'option-2'
        };
    });

});