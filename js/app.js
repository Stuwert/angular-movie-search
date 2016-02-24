var app = angular.module('movies', ['ngRoute']);

app.controller('MovieController', ['$http', '$scope', function($scope){
  $scope.searchValue;
}])

app.config(function($routeProvider){
  $routeProvider
    .when('/movies/:id', {
      controller: 'SingleController',
      templateUrl: 'partials/movie.html'
    })
    .when('/search/:terms', {
      controller: 'SearchController',
      templateUrl: 'partials/results.html'
    })
    .otherwise({
      templateUrl: 'partials/home.html'
    })
})
