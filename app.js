// Environment Variables
require('dotenv').config()

// Open port on 4200
const PORT = process.env.PORT || 4200;

// Require Express
const express = require('express');
const app = express();

// Port Test
app.listen(PORT, function(){
  console.log('App listening on: ' + PORT);
});

//require mustache
const mustache = require('mustache-express');
//configure mustache
app.engine('html',mustache());
app.set('view engine','html');
app.set('views',__dirname+'/public/views');
app.use(express.static(__dirname+"/public"));

// Require Request
var request = require('request');

// Setup for Twitter package
// Getting Bearer token to access Twitter API
// Twitter Keys and Bearer token
var consumerKey = process.env.CONSUMER_KEY_TWITTER
var consumerSecret = process.env.CONSUMER_SECRET_TWITTER
var bearerToken = process.env.BEARER_TOKEN_TWITTER

var Twitter = require('twitter');

var Tweets = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  bearer_token: bearerToken
});

//Rendering pages
// If they only choose to search User-Name
app.get('/:screenName/:searchTerm/:numOfTweets', function(req, res){

  screenName = "from:" + req.params.screenName;
  // console.log(screenName);
  searchTerm = req.params.searchTerm;
  // console.log(searchTerm);
  numOfTweets = req.params.numOfTweets;
  // console.log(numOfTweets);

  var params = {q: screenName+" "+searchTerm, count: numOfTweets };

  Tweets.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.json({ tweets: tweets })
    } else {
      console.log(error)
    }
  });
});

//Twitter Search
app.get('/', function(req, res){
  res.render('index')
});







