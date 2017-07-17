angular.module('myapp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.tasks = [
            { 'body': 'do this 1', 'done': false},
            { 'body': 'do this 2', 'done': false},
            { 'body': 'do this 3', 'done': true},
            { 'body': 'do this 4', 'done': false},
        ];
    }]);
