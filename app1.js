$(document).ready(function(){

  // Define URL for NY Times
  var urlNY = "https://api.nytimes.com/svc/books/v3/lists.json";
  var apiKeyNY = "016bb440492c4390905f4f3221aa960a";

  //Define URL for Google Books API
  var urlStartGoog = "https://www.googleapis.com/books/v1/volumes?q=";
  var apiKeyGoog = "AIzaSyB-uthXyrD9eKc_NIDFjcUjpSq7SEDbLjw";
  var urlArray = [];

  // Creating title array from previous $getButton until they are combined.
  var names = ["THE+BLACK+WIDOW", "THE+GIRLS", "FIRST+COMES+LOVE", "THE+GAMES", "END+OF+WATCH", "THE+NIGHTINGALE", "ALL+THE+LIGHT+WE+CANNOT+SEE", "LIFE+DEBT:+AFTERMATH", "HERE'S+TO+US", "BEFORE+THE+FALL", "AFTER+YOU", "THE+GIRL+ON+THE+TRAIN", "FOREIGN+AGENT", "BELGRAVIA", "THE+NEST", "SWEETBITTER", "AMONG+THE+WICKED", "THE+SINGLES+GAME", "HOMEGOING"];

  // When the button gets clicked:
  $("#getButton").on("click", function(){

    // Pull list from the drop down menu to search NY Times API
    var list = $("#subjectTextbox").val();

    // Redefine NY Times URL with input
    urlNY += '?' + $.param({
      'api-key': apiKeyNY,
      'list': list,
    });

    $.get(urlNY)
      .then (function(result){
        console.log(result);
        // Create an empty array for titles that will populate when looping through
        titles = [];
        for (var i=0; i<result.results.length; i++){
          // Create Array of titles and replace all white space with a + for easy searching in the Google Books API
          titles.push((result.results[i].book_details[0].title.replace(/\s/g, "+")));
          //Define the Titles and input them into the html document
          var $newTitle = $("<p>");
          $newTitle = $newTitle.text(result.results[i].book_details[0].title);
          $newTitle = $newTitle.attr("val", result.results[i].book_details[0].title);
          $("#DataContainer").append($newTitle);
        }
        console.log(titles);
      })
      .catch(function(err){
        throw err;
      });
    // Add in .then to search google books API

  });

// Google Books Call

  var key = "AIzaSyB-uthXyrD9eKc_NIDFjcUjpSq7SEDbLjw";
  var urlStart = "https://www.googleapis.com/books/v1/volumes?q=";

  $("#getButton2").on("click", function(){

  for (var j in names){
    console.log(names[j]);
    urlArray.push(urlStart + "+intitle:" + names[j] + "&key=" + key);
  }

  console.log(urlArray);

  var promises = urlArray.map(function(url){
    return $.get(url);
  });

  Promise.all(promises)
    .then(function(data){
      console.log(data);
      for (var k in data){
        console.log(data[k].items[0].volumeInfo.title);
        var $newpicture = $("<img>");
        $newpicture = $newpicture.attr("src",data[k].items[0].volumeInfo.imageLinks.thumbnail);
        $("#DataContainer").append($newpicture);
      }
    });

  });
});

// });
