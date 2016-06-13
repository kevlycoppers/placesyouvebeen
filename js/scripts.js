//Back End
function Place(name, country, landmarks, timeOfYear, notes, imgLink){
  this.name = name;
  this.country = country;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.imgLink = imgLink;
}

var amsterdam = new Place("Amsterdam","The Netherlands","Anne Frank House","Spring","tulips","img/amsterdam.jpg")

//Front End
$(document).ready(function(){
  $(".place-list").append("<li class='placename'>"+amsterdam.name+"</li>");
  $(".placename").last().click(function(event){
    event.preventDefault();
    $(".infoList").append("<li class='infoItem'>Place Name: " + amsterdam.name + "</li><li>Country: "+amsterdam.country+"</li><li>Landmarks: " + amsterdam.landmarks + "</li><li>Time of Year Visited: " + amsterdam.timeOfYear + "</li><li>Notes: " + amsterdam.notes + "</li>");
    $(".placeImage").append("<img class='infoItem' src='"+amsterdam.imgLink+"' alt='Amsterdam'>");

    $(".infoItem").click(function(){

    })
  });
});
