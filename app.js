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

// Renders web page
app.get('/', function(req, res){
  res.render('index')
});

// Custom backend for more accurate calls
// If they only choose to search User-Name
app.get('/both/:screenName/:searchTerm/:numOfTweets', function(req, res){

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

app.get('/screenNameOnly/:screenName/:numOfTweets', function(req, res){

  screenName = "from:" + req.params.screenName;
  // console.log(screenName);
  numOfTweets = req.params.numOfTweets;
  // console.log(numOfTweets);

  var params = {q: screenName, count: numOfTweets };

  Tweets.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.json({ tweets: tweets })
    } else {
      console.log(error)
    }
  });
});

app.get('/searchTermOnly/:searchTerm/:numOfTweets', function(req, res){

  searchTerm = req.params.searchTerm;
  // console.log(searchTerm);
  numOfTweets = req.params.numOfTweets;
  // console.log(numOfTweets);

  var params = {q: searchTerm, count: numOfTweets };

  Tweets.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.json({ tweets: tweets })
    } else {
      console.log(error)
    }
  });
});



// Coords api URLS
app.get('/both/:screenName/:searchTerm/:numOfTweets/:longitude/:latitude', function(req, res){

  screenName = "from:" + req.params.screenName;
  // console.log(screenName);
  searchTerm = req.params.searchTerm;
  // console.log(searchTerm);
  numOfTweets = req.params.numOfTweets;
  // console.log(numOfTweets);
  geoLocation = req.params.latitude + ',' + req.params.longitude + ',50mi';
  console.log(geoLocation);

  var params = {q: screenName+" "+searchTerm, count: numOfTweets, geocode: geoLocation };

  Tweets.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.json({ tweets: tweets })
    } else {
      console.log(error)
    }
  });
});

app.get('/screenNameOnly/:screenName/:numOfTweets/:longitude/:latitude',
  function(req, res){

  screenName = "from:" + req.params.screenName;
  // console.log(screenName);
  numOfTweets = req.params.numOfTweets;
  // console.log(numOfTweets);
  geoLocation = req.params.latitude + ',' + req.params.longitude + ',50mi';
  console.log(geoLocation)


  var params = {q: screenName, count: numOfTweets, geocode: geoLocation };

  Tweets.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.json({ tweets: tweets })
    } else {
      console.log(error)
    }
  });
});

app.get('/searchTermonly/:searchTerm/:numOfTweets/:longitude/:latitude',
  function(req, res){

  searchTerm = req.params.searchTerm;
  // console.log(searchTerm);
  numOfTweets = req.params.numOfTweets;
  // console.log(numOfTweets);
  geoLocation = req.params.latitude + ',' + req.params.longitude + ',50mi';

  var params = {q: searchTerm, count: numOfTweets, geocode: geoLocation };
  console.log(params)

  Tweets.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
      return res.json({ tweets: tweets })
    } else {
      console.log(error)
    }
  });
});




