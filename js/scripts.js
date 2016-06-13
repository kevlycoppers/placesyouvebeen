//Back End
var globalPlaceArray = [];
function Place(name, country, landmarks, timeOfYear, notes, imgLink){
  this.name = name;
  this.country = country;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.imgLink = imgLink;
  globalPlaceArray.push(this);
}

var amsterdam = new Place("Amsterdam","The Netherlands","Anne Frank House","Spring","tulips","img/amsterdam.jpg")
var lasvegas = new Place("Las Vegas","United States of America","Casinos","Summer","Boss af","img/lasvegas.jpg")

//Front End
$(document).ready(function(){
  for (var i=0; i<globalPlaceArray.length; i++){
    $(".place-list").append("<li class='placename place"+i+"'>"+globalPlaceArray[i].name+"</li>");

  };
  i=0;
  $(".placename").click(function(event){
    debugger;
    var thisClass = $(this).attr("class");
    var j = thisClass.charAt(thisClass.length-1);
    console.log(j);
    event.preventDefault();
    $(".infoItem").remove();
    $(".infoList").append("<li class='infoItem'>Place Name: " + globalPlaceArray[j].name + "</li><li class='infoItem'>Country: "+globalPlaceArray[j].country+"</li><li class='infoItem'>Landmarks: " + globalPlaceArray[j].landmarks + "</li><li class='infoItem'>Time of Year Visited: " + globalPlaceArray[j].timeOfYear + "</li><li class='infoItem'>Notes: " + globalPlaceArray[j].notes + "</li>");
    $(".placeImage").append("<img class='infoItem' src='"+globalPlaceArray[j].imgLink+"' alt='Amsterdam'>");
  });
});
