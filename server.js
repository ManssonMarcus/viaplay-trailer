var express = require('express');
var app = express();

app.use(express.static('public'));

var movieTrailerRoute = require('./controllers/movieTrailer.js');

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/film/:movieId', function(req, res) {
  var movieId = req.params.movieId;
	var promise = movieTrailerRoute.getMovie(movieId);
	promise.then(function(response) {
		// Assumes that movieTrailer.getMovie returns a promise that is resolved
		// with the requested data.
		res.send(response);
	}, function(reason) {
		// Should handle error here, 500
	})
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})