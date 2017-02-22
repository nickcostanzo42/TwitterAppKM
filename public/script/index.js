// $(function(){
//   $.ajax({
//     url: 'http://localhost:4200/twitter-data',
//     dataType: 'json',
//     cache: 'false'
//   }).done(function(data){
//     console.log(data)
//   }).error(
//    // do nothing
//   )
// })

$('#searchForm').submit(function(e){
  // Get values from the form
  e.preventDefault();
  screenName = $('#screenName').val();
  // console.log(screenName === "");
  searchTerm = $('#searchTerm').val();
  numOfTweets = $('#numOfTweets').val();
  loc = $('#loc').val();

  // Set up the URL
  if (screenName === "") {
    var twitterSearchUrl = 'http://localhost:4200/' + searchTerm + '/' + numOfTweets;
  }
  else if (searchTerm === "") {
    var twitterSearchUrl = 'http://localhost:4200/' + screenName + '/' + numOfTweets;
  }
  else {
    var twitterSearchUrl = 'http://localhost:4200/' + screenName + '/' +
    searchTerm + '/' + numOfTweets;
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

})
