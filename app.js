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
// Twitter Keys
var consumerKey = process.env.CONSUMER_KEY_TWITTER
var consumerSecret = process.env.CONSUMER_SECRET_TWITTER
// // Bearer Token
var bearerToken = process.env.BEARER_TOKEN_TWITTER
console.log(consumerKey)

// Script used for getting bearer token
// var bearerTokenTo64 = function() {
//   return new Buffer(consumerKey + ':' + consumerSecret).toString('base64');
// };

// var getBearerToken = function() {

//   if(bearerToken === null) {
//     var bearerCredentials = bearerTokenTo64();

//     // Header options for token request
//     var oauthOptions = {
//       'url': 'https://api.twitter.com/oauth2/token',
//       'method': 'POST',
//       'headers': {
//         'Authorization': 'Basic ' + bearerCredentials,
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//         'Content-Length': 29,
//       },
//       'body': 'grant_type=client_credentials'
//     }

//     // Post request for bearer token
//     request.post(oauthOptions, function(err, res, body) {
//       if(err) cb(err);
//       else{
//         var bodyjson = JSON.parse(body);
//         bearer = bodyjson.access_token;
//         console.log(bearer)
//       }
//     });
//   }
//   else{
//     console.log('You already have created a bearer token');
//   }
// }

// bearerToken = getBearerToken();
// console.log(bearerToken)

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  bearer_token: bearerToken
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error)
  }
});


//Rendering pages
app.get('/', function(req, res){
  res.render('index')
})



