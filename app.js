$(document).ready(function(){

// Google Books Call

// var key = "AIzaSyB-uthXyrD9eKc_NIDFjcUjpSq7SEDbLjw";
// var urlStart = "https://www.googleapis.com/books/v1/volumes?q=";
// var search = "";
// var subject = "";
//
//   $("#getButton").on("click", function(){
//
//     search = $("#keywordTextbox").val();
//     subject = $("#subjectTextbox").val();
//
//   var url = urlStart + search + "+subject:" + subject + "&key=" + key;
//
//   $.ajax({
//       url: url,
//       error: function(err) {console.error(err);},
//       method: 'GET',
//       data: {maxResults:40},
//       success: function(data) {
//         console.log(data);
//         titles = [];
//         for (var i=0; i<data.items.length; i++){
//           var $newTitle = $("<p>");
//           $newTitle = $newTitle.text(data.items[i].volumeInfo.title);
//           $newTitle = $newTitle.attr("val", data.items[i].volumeInfo.title);
//           $("#DataContainer").append($newTitle);
//         }
//
//       }
//     });
//   });
// });




  //NY TIMES BOOK API - Best Seller List

  var url = "https://api.nytimes.com/svc/books/v3/lists.json";
  var apiKey = "016bb440492c4390905f4f3221aa960a";

  $("#getButton").on("click", function(){

    var list = $("#subjectTextbox").val();

    url += '?' + $.param({
      'api-key': apiKey,
      'list': list,
    });
    console.log(url);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      console.log(result.results[0].book_details[0].title);
      titles = [];
      for (var i=0; i<result.results.length; i++){
      var $newTitle = $("<p>");
      $newTitle = $newTitle.text(result.results[i].book_details[0].title);
      $newTitle = $newTitle.attr("val", result.results[i].book_details[0].title);
      $("#DataContainer").append($newTitle);
      }
    }).fail(function(err) {
      throw err;
    });

  });

});
