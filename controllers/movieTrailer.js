var Q = require('Q');
var xml2js  = require('xml2js').parseString;
var request = require("request");

var urlIMDb = 'http://www.omdbapi.com/?t=';
var pathIMDb = '&y=&plot=short&r=json';
var urlTrailerAPI = 'http://api.traileraddict.com/?imdb=';
var urlTrailer = 'https://v.traileraddict.com/';


function  getMovie(movie) {

	var promise = getIMDbContent(movie)
		.then(getTrailer);

		return promise;

}

function getIMDbContent(movie){
	return Q.Promise(function(resolve) {
		request(urlIMDb+movie+pathIMDb, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				resolve({'payload': body})
			}
			else {
				throw new Error("ERROR: could not get imdb");
			}
		});
	});
}

function getTrailer(data) {

	data = JSON.parse(data.payload);
	imdbID = data.imdbID.replace(/[^\d]+/,'');

	return data;


}

module.exports = {
	getMovie: getMovie
};
