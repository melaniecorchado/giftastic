$(document).ready(function(){

//global variables
    var tvshows = ["Supernatural", "New Girl", "Friends", "Big Bang Theory", "Game Of Thrones"];
    var stillImg = [];
    var animateImg = [];
    var ifStill =[true, true, true, true, true, true, true, true, true, true];

    function showGif(){

$(".television").click(function(){

	$("#gif").empty();
    var show = $(this).attr("data-tv");

	 $.ajax({
          url: show,
          method: "GET"
          }).done(function(response) {
          	for(var j = 0; j < 10; j++){
    
          	$("#gif").append("<div class='display'><img src='"+response.data[j].images.fixed_height_still.url+"'data-show = '"+j+"' class='jifs'><p>Rating: "+response.data[j].rating
              +"</p></div>" );
            animateImg[j]=response.data[j].images.fixed_height.url;
            stillImg[j]=response.data[j].images.fixed_height_still.url;
          }
          animate();
      });
      });
}

displayButton();
showGif();

//function to display the buttons and add buttons to screen
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

        var tvGif = $("#showinput").val().trim();

        tvshows.push(tvGif);

        displayButton();
        showGif();

      });

//function to both animate and still the gifs
   function animate() {
      $(".jifs").on("click", function(){
        var index = $(this).attr("data-show");
        if (ifStill[index] === true){
          $(this).attr("src", animateImg[index]);
          ifStill[index] = false;
        } 
        else {
          $(this).attr("src", stillImg[index]);
            ifStill[index] = true;
        }
      });

   } 


});