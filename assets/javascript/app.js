$(document).ready(function(){

    var tvshows = ["Supernatural", "Hells Kitchen", "Friends", "Big Bang Theory", "Game Of Thrones"];

    function showGif(){

$(".television").click(function(){

	$("#gif").empty();
    var show = $(this).attr("data-tv");

	 $.ajax({
          url: show,
          method: "GET"
          }).done(function(response) {
          	for(var j = 0; j < 10; j++){
          	$("#gif").append("<img src='"+response.data[j].images.fixed_height.url+"'>");
          }
      });
      });
}

displayButton();
showGif();

   function displayButton(){
		for(var i = 0; i < tvshows.length; i++){
            var showBtn = $("<button>");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q="+tvshows[i]+"&api_key=dc6zaTOxFJmzC"
            showBtn.addClass("television");
            showBtn.attr("data-tv", queryURL);
            showBtn.text(tvshows[i]); 
            $("#button").append(showBtn);            
        }
    }

//This function handles events where one button is clicked
      $("#findshow").on("click", function(event) {
        event.preventDefault();
        $("#button").empty();

        // This line grabs the input from the textbox
        var tvGif = $("#showinput").val().trim();

        // The movie from the textbox is then added to our array
        tvshows.push(tvGif);

        displayButton();
        showGif();

      });

      // Generic function for displaying the movieInfo
      //$(document).on("click", ".television", );


});