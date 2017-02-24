// Script used for getting bearer token for Twitter's API
var bearerTokenTo64 = function() {
  return new Buffer('INSERT_CONSUMER_KEY' + ':' + 'INSER_CONSUMER_KEY_SECRET').toString('base64');
};

var getBearerToken = function() {

  if(bearerToken === null) {
    var bearerCredentials = bearerTokenTo64();

    // Header options for token request
    var oauthOptions = {
      'url': 'https://api.twitter.com/oauth2/token',
      'method': 'POST',
      'headers': {
        'Authorization': 'Basic ' + bearerCredentials,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Length': 29,
      },
      'body': 'grant_type=client_credentials'
    }

    // Post request for bearer token
    request.post(oauthOptions, function(err, res, body) {
      if(err) cb(err);
      else{
        var bodyjson = JSON.parse(body);
        bearer = bodyjson.access_token;
        console.log(bearer)
      }
    });
  }
  else{
    console.log('You already have created a bearer token');
  }
}

bearerToken = getBearerToken();
console.log(bearerToken)
