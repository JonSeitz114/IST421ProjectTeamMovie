angular.module('movies').config(['$routeProvider',
function($routeProvider) {
$routeProvider.
when('/movies', {
templateUrl: 'movies/views/listmovies.client.view.html'
}).
when('/movies/create', {
templateUrl: 'movies/views/createmovies.client.view.html'
}).
when('/movies/:movieId', {
templateUrl: 'movies/views/viewmovies.client.view.html'
}).
when('/movies/:movieId/edit', {
templateUrl: 'movies/views/editmovies.client.view.html'
});
}
]);
