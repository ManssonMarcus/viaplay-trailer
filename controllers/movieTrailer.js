var Q = require('Q');
var https = require('https');
var http = require('http');
var xml2js  = require('xml2js').parseString;
var urlContent = 'https://content.viaplay.se/web-se/film/';
var urlTrailerAPI = 'http://api.traileraddict.com/?imdb=';
var urlTrailer = 'https://v.traileraddict.com/';


function  getMovie(movie) {
	
	var promise = getViaPlayContent(movie)
		.then(getTrailer);
		
		return promise;

}

function getViaPlayContent(movie){
	return Q.Promise(function(resolve) {
			  https.get(urlContent+movie, function(res) {	
				  res.setEncoding('utf8');
				  res.on('data', function(d) {
				    console.log(d);
				    resolve({
				    	'payload': d
				    })
				  });
				}).on('error', function(e) {
				  throw new Error("ERROR: Something happened...");
				});
	});
}

function getTrailer(data) {
	
	var options = {
	  host: 'api.traileraddict.com',
	  path: '/?imdb=2024469'
	};

	return Q.Promise(function(resolve) {
			  http.request(options, function(res) {	
				  //res.setEncoding('utf8');
				  res.on('data', function(d) {
				  	var newD = d;
				    xml2js(d, function (err, result) {
					    console.log(result.trailers.trailer[0].trailer_id);
					    newD = result.trailers.trailer[0].trailer_id;
					});
				    resolve({
				    	'trailer_url': urlTrailer+newD
				    })
				  });
				}).on('error', function(e) {
				  throw new Error("ERROR: Something happened...");
				}).end();
	});
}

module.exports = {
	getMovie: getMovie
};