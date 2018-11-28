angular.module('movies').controller('MoviesController',
['$scope', '$routeParams', '$location', 'Authentication',
'Movies',
function($scope, $routeParams, $location, Authentication,
Movies) {
$scope.authentication = Authentication;
}
]);

$scope.create = function() {
var movie = new Movies({
title: this.title,
dateofrelease: this.dateofrelease,
director: this.director,
genre: this.genre,
actors: this.actors,
runtime: this.runtime,
rating: this.rating
});
movie.$save(function(response) {
$location.path('movies/' + response._id);
}, function(errorResponse) {
$scope.error = errorResponse.data.message;
});
};

$scope.find = function() {
$scope.movies = Movies.query();
};
$scope.findOne = function() {
$scope.movie = Movies.get({
movieId: $routeParams.movieId
});
};

$scope.update = function() {
$scope.movie.$update(function() {
$location.path('movies/' + $scope.movie._id);
}, function(errorResponse) {
$scope.error = errorResponse.data.message;
});
};

$scope.delete = function(movie) {
if (movie) {
movie.$remove(function() {
for (var i in $scope.movies) {
if ($scope.movies[i] === movie) {
$scope.movies.splice(i, 1);
}
}
});
} else {
$scope.movie.$remove(function() {
$location.path('movies');
});
}

