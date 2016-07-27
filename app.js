$(document).ready(function(){

  //NY TIMES BOOK API - Best Seller List

  // var url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json";
  // var apiKey = "016bb440492c4390905f4f3221aa960a";
  // url += '?' + $.param({
  //   'api-key': apiKey
  // });
  // console.log(url);
  //
  // $.ajax({
  //   url: url,
  //   method: 'GET',
  // }).done(function(result) {
  //   console.log(result);
  // }).fail(function(err) {
  //   throw err;
  // });

// Google Books Call

var key = "AIzaSyB-uthXyrD9eKc_NIDFjcUjpSq7SEDbLjw";
var urlStart = "https://www.googleapis.com/books/v1/volumes?q=";
var search = "puppies";
var subject = "fiction";
var url = urlStart + search + "+subject:" + subject + "&key=" + key;
// var url = ... + "q=" + search + "&key:" + key
// & then define search bar as the search function
  // url: 'https://www.googleapis.com/books/v1/volumes?q=vampire+subject:fiction&key=AIzaSyB-uthXyrD9eKc_NIDFjcUjpSq7SEDbLjw'


  $.ajax({
      url: url,
      error: function(err) {console.error(err);},
      method: 'GET',
      success: function(data) {
        console.log(data.items[0].volumeInfo);
        for (var i=0; i<data.items.length; i++){
          console.log(data.items[i].volumeInfo.title);
        }
      }
    });


  });
