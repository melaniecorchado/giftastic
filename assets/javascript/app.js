$(document).ready(function(){

    var tvshows = ["Supernatural", "Hells Kitchen", "Friends", "Scandal"];

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
            var queryURL = "http://api.giphy.com/v1/gifs/search?q="+tvshows[i]+"&api_key=dc6zaTOxFJmzC"
            showBtn.addClass("television");
            showBtn.attr("data-tv", queryURL);
            showBtn.text(tvshows[i]);
            
            $("#button").append(showBtn);           
 
        }
    }


});