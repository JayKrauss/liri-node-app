require("dotenv").config();
var request = require("request");

var command = process.argv[2];
var confirmation = process.argv[3];

if (command === 'my-tweets'){

}

if (command === 'spotify-this-song'){
var song = confirmation;
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "b86dcb2e75764c628ea3e781c3e16329",
  secret: "a7dadb1a76c74d5289a9082bdd2475f4"
});
 
spotify.search({ type: 'track', query: song }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log("________________________________________________");
  console.log('Artist information', JSON.parse(data));
  console.log("________________________________________________");
});
}

if (command === 'movie-this'){
var movie = confirmation;
request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  if (!error && response.statusCode === 200) {
    console.log("________________________________________________");
    console.log("LIRI Found: " + JSON.parse(body).Title);
    console.log("Movie Released: " + JSON.parse(body).Year);
    console.log("IMDB rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Score: " + JSON.parse(body).tomatoUserRating);
    console.log("It was made in: " + JSON.parse(body).Country);
    console.log("Filmed in: " + JSON.parse(body).Language);
    console.log("Plot Summary: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("________________________________________________");
  }
});
}

if (command = 'do-what-it-says'){

}