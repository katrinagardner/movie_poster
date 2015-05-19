 $(document).ready(function(){
  $(".movie").click(function(){
    if($(this).css("display")==="block"){
      $(this).siblings().slideDown("slow");
      $(this).slideUp("slow");
      $(this).siblings().css("visibility", "visible");
    }
  });
  $(".info").click(function(){
    if($(this).css("display")==="block"){
      $(this).slideUp("slow");
      $(this).css("visibility", "hidden");
      $(this).siblings().slideDown("slow");
      $(this).siblings().css("visibility", "visible");
    }
  })
})


var action = ["American Sniper","Taken 3","The Interview","Guardians of the Galaxy ","The Equalizer","Fury"]
var comedy = ["Night at the Museum: Secret of the Tomb","Inherent Vice","Birdman","The Grand Budapest Hotel","Frozen ","Horrible Bosses 2"]
var romance = ["Cinderella","The Fault in Our Stars ","If I Stay","Maleficent","Twilight","Her"]


var list = document.getElementById("movielist");

var create = function(elem){
  var img = document.createElement("img");
  img.className="unselected";
 
  var button = document.createElement("Button");

  var div = document.createElement("div");
  div.className="movie";
  var button = document.createElement("button");

  //each list item contains a image and title of movie
  list.appendChild(div);
  div.appendChild(img);
  div.appendChild(button);




  button.addEventListener("click", function(){

   var posterdiv = document.createElement("div");
   div.className = "info";
   var imges = document.createElement("img");
   var title = document.createElement("h2");
   var year = document.createElement("h3");
   var plot = document.createElement("h4");
   var director = document.createElement("h4");
   var actor = document.createElement("h4");

   //append list items with hidden elements
   list.appendChild(posterdiv);
   posterdiv.appendChild(imges);
   posterdiv.appendChild(title);
   posterdiv.appendChild(year);
   posterdiv.appendChild(plot);
   posterdiv.appendChild(director);
   posterdiv.appendChild(actor);

   var input = elem; //
   var url_safe = encodeURI(input);
   var url = "http://omdbapi.com/?t=" + url_safe; //link to info(part of api)
   var xhr = new XMLHttpRequest(); //get the request

   xhr.open("GET", url); //"get" will get from url , open up the request from xhr.
   xhr.addEventListener('load', function(e){ //ready for event listener , will load it after we the request. (e)is stand for event.  
     var data = xhr.responseText; //***automatically JSON stringified***
     var parsed = JSON.parse(data); // **MUST parse information because of JSON**
     console.log(parsed); // object you see on the web browser dev tool.
     imges.src = parsed.Poster; // this is the way of you accessing the information of the object. 
     title.innerHTML = "Movie: " + parsed.Title;
     year.innerHTML = "Year: " + parsed.Year;
     director.innerHTML = "Director: " + parsed.Director;
     plot.innerHTML = "Plot: " + parsed.Plot;
     actor.innerHTML = "Actors: " + parsed.Actors;
   })
   xhr.send();

});

  var input = elem;
  var url_safe = encodeURI(input);
  var url = "http://omdbapi.com/?t=" + url_safe; //link to info(part of api)
  var xhr = new XMLHttpRequest();

  xhr.open("GET", url); //"get" will get from url
  xhr.addEventListener('load', function(e){ //ready for event listener
    var data = xhr.responseText; //***automatically JSON stringified***
    var parsed = JSON.parse(data); // **MUST parse information because of JSON**
    console.log(parsed);
    img.src = parsed.Poster;
    button.innerHTML = parsed.Title;

  })
  xhr.send();
}

comedy.forEach(create);
romance.forEach(create);
action.forEach(create);
