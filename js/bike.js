function Bike(){
}

Bike.prototype.output = function(location, displayOutput){
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + location + '&distance=10&stolenness=stolen').then(function(response){
    var bikes_array = [];
    var time = [];
    response.bikes.forEach(function(bikes) {
      var dateStolen = bikes.date_stolen*1000;
      if (((Date.now()-1*24*60*60*1000) < dateStolen) && (dateStolen < Date.now())){
        bikes_array.push(bikes.title);
        var newdate = new Date(dateStolen);
        var timeInPST = newdate.toLocaleDateString();
        time.push(timeInPST);
      };
    });
    displayOutput(location, bikes_array);

  }).fail(function(error){
    $('#output').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
