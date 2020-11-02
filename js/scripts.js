function AddDestination() {
  this.outputDestination = [];
}
AddDestination.prototype.addDestination = function(destination) {
  this.outputDestination.push(destination);
}

function Extra(destination, year, landmark) {
  this.destination = destination;
  this.year = year;
  this.landmark = landmark;
}
Extra.prototype.extras = function() {
  return this.year + " " + this.landmark;
}
jQuery("#InputDestinations").click(function() {
  $(this).data("clicked", true);
}); 
function branching() {
  if(jQuery("#inputDestinations").data("clicked")) {
    $("#extras").show();
  }
}
$(document).ready(function() {
  //let idNumber = 1;
  let final = new AddDestination();
  $("form#places").submit(function(event) {
    event.preventDefault();
    //$("#destinations").show();
    let finalDes = new Extra($("#inputDestination").val(), $("#year").val(), $("#landmark").val());
    //let destination = $("#destinations").val();
    //let year = $("#year").val();
    //let landmark = $("#landmark").val();
   // let location = new Extra(destination, year, landmark);

    final.addDestination($("#inputDestination").val());
    branching();
    $("#outputDestination").append("<li>" +  destination.extras(destination) + "</li>");
  });
});