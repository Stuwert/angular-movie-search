app.controller('SearchController', ['$routeParams', '$http', '$scope',
  function($routeParams, $http, $scope){
    $scope.results = [];
    $http({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie?api_key=7fb22e55a5bafa415e02fe8d426ad2f9&query=' + $routeParams.terms,
      dataType: 'json'
    }).then(function successCallback(response){
      $scope.movies = response.data.results;
      console.log($scope.movies);
    })
    // console.log($routeParams.terms);
    // $scope.value = $routeParams.terms;
    // $http({
    //   method: 'GET',
    //   // url: url: 'https://api.themoviedb.org/3/search/person?api_key=7fb22e55a5bafa415e02fe8d426ad2f9&query=' + $scope.actor.split(" ").join("+"),
    //   dataType: 'jsonp'
    // })
  }
])
