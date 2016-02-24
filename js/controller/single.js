app.controller('SingleController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.movie;
  $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + $routeParams.id  + '?api_key=7fb22e55a5bafa415e02fe8d426ad2f9',
    dataType: 'jsonp'
  }).then(function successCallback(response){
    $scope.movie = response.data;
    console.log($scope.movie);
  })

}])
