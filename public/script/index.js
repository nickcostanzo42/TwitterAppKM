$('#searchForm').submit(function(e){

  // Get values from the form
  e.preventDefault();
  screenName = $('#screenName').val();
  // console.log(screenName === "");
  searchTerm = $('#searchTerm').val();
  numOfTweets = $('#numOfTweets').val();
  loc = $('#loc').val();
  formatLoc = loc.replace(/\s\s+/g, ' ').replace(/ /g, '+');
  geolocURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + formatLoc + '&key=GOOGLE_GEOLOC_API_GOES_HERE';

  // Callback for twitter API call
  twitterApiCall = function(screenName, searchTerm, numOfTweets) {
    // Set up the URL
    if (screenName === "") {
      var twitterSearchUrl = 'http://localhost:4200/searchTermOnly/' + searchTerm + '/' + numOfTweets;
      var errorMsg = "<p>Search term(s) you entered didn't provide any results.</p>"
    }
    else if (searchTerm === "") {
      var twitterSearchUrl = 'http://localhost:4200/screenNameOnly/' + screenName + '/' + numOfTweets;
      var errorMsg = "<p>The screen name you entered didn't provide any results.</p>"
    }
    else {
      var twitterSearchUrl = 'http://localhost:4200/both/' + screenName + '/' +
      searchTerm + '/' + numOfTweets;
      var errorMsg = "<p>The screen name and search term(s) you entered didn't provide any results, try being more specific.</p>"
    }

    $(function(){
    $.ajax({
      url: twitterSearchUrl,
      dataType: 'json',
      cache: 'false'
    }).done(function(data){
      $('#results').html('');
      results = data.tweets.statuses;
      if (results.length === 0) {
        $('#errorMessage').html(errorMsg)
      } else {
      results.forEach(function(result){
        $('#results').append(
        "<div id='results'>" +
          "<div class='row'>" +
            "<div class='col s12'>" +
              "<div id='tweetCard' class='card horizontal' draggable='true'>" +
                "<div class='card-image'>" +
                  "<img id='profileImage' src='" + result.user.profile_image_url + "'>" +
                "</div>" +
              "<div class='card-stacked'>" +
                "<div class='card-content'>" +
                  "<p>@" + result.user.screen_name + "</p>" +
                  "<p>" + result.user.name + "</p>" +
                  "<br />" +
                  "<p>" + result.text + "</p>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
        )
      })
     }
    }).error(
     // do nothing
    )
    })
  }

  var twitterApiCallWithCoords = function(screenName, SearchTerm, numOfTweets, longitude, latitude) {

      if (screenName === "") {
        var twitterSearchUrl = 'http://localhost:4200/searchTermOnly/' + searchTerm + '/' + numOfTweets + '/' + longitude + '/' + latitude;
        var errorMsg = "<p>Search term(s) you entered didn't provide any results.</p>"
      }
      else if (searchTerm === "") {
        var twitterSearchUrl = 'http://localhost:4200/screenNameOnly/' + screenName + '/' + numOfTweets + '/' + longitude + '/' + latitude;
        var errorMsg = "<p>The screen name you entered didn't provide any results.</p>"
      }
      else {
        var twitterSearchUrl = 'http://localhost:4200/both/' + screenName + '/' +
        searchTerm + '/' + numOfTweets + '/' + longitude + '/' + latitude;
        var errorMsg = "<p>The screen name and search term(s) you entered didn't provide any results, try being more specific.</p>";
      }

      $(function(){
      $.ajax({
        url: twitterSearchUrl,
        dataType: 'json',
        cache: 'false'
      }).done(function(data){
      $('#results').html('');
      results = data.tweets.statuses;
      results.forEach(function(result){
        $('#results').append(
        "<div id='results'>" +
          "<div class='row'>" +
            "<div class='col s12'>" +
              "<div id='tweetCard' class='card horizontal' draggable='true'>" +
                "<div class='card-image'>" +
                  "<img id='profileImage' src='" + result.user.profile_image_url + "'>" +
                "</div>" +
              "<div class='card-stacked'>" +
                "<div class='card-content'>" +
                  "<p>@" + result.user.screen_name + "</p>" +
                  "<p>" + result.user.name + "</p>" +
                  "<br />" +
                  "<p>" + result.text + "</p>" +
                  "<div id='hideResult'>X</div>" +
                "</div>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>"
        )
      })
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

  var makeSortable = function() {
    $('#results').sortable();
    $('#results').disableSelection();
  }

// To make sure user enters correct parameters for search
  if (screenName === '' && searchTerm === '' && numOfTweets === '') {
    $('#errorMessage').html('<p>Please enter either a username or search term, and select a number of results to show.</p>');
  } else if (numOfTweets === '') {
    $('#errorMessage').html('<p>Please select a number of results to show.</p>');
  } else {

// Calling the api methods depending on if location is used or not
    if (loc === ''){
      $('#errorMessage').html('')
      twitterApiCall(screenName, searchTerm, numOfTweets);
      makeSortable();
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
        makeSortable();
      }).error(
        //do nothing
      )
    }
  }

})
