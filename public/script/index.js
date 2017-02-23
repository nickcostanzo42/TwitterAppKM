$('#searchForm').submit(function(e){

  // Get values from the form
  e.preventDefault();
  screenName = $('#screenName').val();
  // console.log(screenName === "");
  searchTerm = $('#searchTerm').val();
  numOfTweets = $('#numOfTweets').val();
  loc = $('#loc').val();
  formatLoc = loc.replace(/\s\s+/g, ' ').replace(/ /g, '+');
  geolocURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + formatLoc + '&key=GOOGLE_API_KEY_GOES_HERE';

  // Callback for twitter API call
  twitterApiCall = function(screenName, searchTerm, numOfTweets) {
    // Set up the URL
    if (screenName === "") {
      var twitterSearchUrl = 'http://localhost:4200/searchTermOnly/' + searchTerm + '/' + numOfTweets;
    }
    else if (searchTerm === "") {
      var twitterSearchUrl = 'http://localhost:4200/screenNameOnly/' + screenName + '/' + numOfTweets;
    }
    else {
      var twitterSearchUrl = 'http://localhost:4200/both/' + screenName + '/' +
      searchTerm + '/' + numOfTweets;
    }

    console.log(twitterSearchUrl)

    $(function(){
    $.ajax({
      url: twitterSearchUrl,
      dataType: 'json',
      cache: 'false'
    }).done(function(data){
      console.log(data)
    }).error(
     // do nothing
    )
    })
  }

  var twitterApiCallWithCoords = function(screenName, SearchTerm, numOfTweets, longitude, latitude) {
      console.log(screenName, SearchTerm, numOfTweets, longitude, latitude)
      if (screenName === "") {
        var twitterSearchUrl = 'http://localhost:4200/searchTermOnly/' + searchTerm + '/' + numOfTweets + '/' + longitude + '/' + latitude;
      }
      else if (searchTerm === "") {
        var twitterSearchUrl = 'http://localhost:4200/screenNameOnly/' + screenName + '/' + numOfTweets + '/' + longitude + '/' + latitude;
      }
      else {
        var twitterSearchUrl = 'http://localhost:4200/both/' + screenName + '/' +
        searchTerm + '/' + numOfTweets + '/' + longitude + '/' + latitude;
      }

      $(function(){
      $.ajax({
        url: twitterSearchUrl,
        dataType: 'json',
        cache: 'false'
      }).done(function(data){
        console.log(data)
      }).error(
       // do nothing
      )
    })

  };

  var getLongitude = function(data) {
    return geoLocLng = data.results[0].geometry.location.lng
  }

  var getLatitude = function(data) {
    return geoLocLat = data.results[0].geometry.location.lat
  }


// To make sure user enters correct parameters for search
  if (screenName === '' && searchTerm === '') {
    $('#errorMessage').html('<p>Please enter either a username or search term</p>')
  } else {

// Calling the api methods depending on if location is used or not
    if (loc === ''){
      $('#errorMessage').html('')
      twitterApiCall(screenName, searchTerm, numOfTweets);
    } else {
      $.ajax({
        url: geolocURL,
        dataType: 'json',
        cache: 'false'
      }).done(function(data){
      // Get longitude/latitude from google's API
        $('#errorMessage').html('')
        longitude = getLongitude(data);
        latitude = getLatitude(data);
        twitterApiCallWithCoords(screenName, searchTerm, numOfTweets, longitude, latitude);
      }).error(
        //do nothing
      )
    }
  }





})
