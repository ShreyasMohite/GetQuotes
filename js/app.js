
$(document).ready(function(){
    $("#data").click(function(){
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://getquotesapi.herokuapp.com/quotes/random",
            type: "GET",
            dataType: "JSON",
            contentType: "application/json",
            // set the request header authorization to the bearer token that is generated
            headers: {
                "Access-Control-Allow-Headers": "X-Requested-With",
                "X-Requested-With": "XMLHttpRequest"        
              },
            success: function(result) {
              //console.log(result);
              const quote=result.quote;
              const author=result.author;
              $("#quote").text(quote);
              $("#author").text(author);
              //console.log(quote);
              //console.log(author);
        
            },
            error: function(error) {
              console.log(`Error ${error}`)
            },
          });
        });
});

