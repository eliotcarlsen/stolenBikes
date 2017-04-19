var Bike = require('./../js/bike.js').bikeModule;
var displayOutput = function (location, outputData){
  
  $('#output').text("Here are the bikes that were stolen in " + location + outputData);
};

$(document).ready(function(){
  $('form#form').submit(function(event){
    event.preventDefault();
    var location = $('#bikes').val();
    var newBike = new Bike();
    newBike.output(location, displayOutput);
  });
});
