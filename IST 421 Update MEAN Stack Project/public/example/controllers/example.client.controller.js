angular.module('example').controller('ExampleController',
['$scope',
function($scope) {
$scope.name1 = 'MEAN Application',
$scope.name2 = window.user.firstName;
$scope.name3 = window.movie.title;
}
]);