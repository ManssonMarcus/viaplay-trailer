var trailerStream = angular.module('trailerStream', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/film/non-stop')
        .success(function(data) {
            console.log(data);
            $scope.trailerFrame = data.trailer_url;
            $scope.title = data.Title;
            $scope.genre = data.Genre+' | '+data.Year+' | '+data.Runtime;
            $scope.plot = data.Plot;
            $scope.imdbSrc ='http://www.imdb.com/title/'+data.imdbID
            $scope.rating = data.imdbRating+' från '+data.imdbVotes+' användare'

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}
