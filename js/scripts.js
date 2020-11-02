function Extra(destination, year, landmark) {
  this.destination = destination;
  this.year = year;
  this.landmark = landmark;
}
Extra.prototype.extras = function() {
  return this.destination + "  " + this.year + " " + this.landmark;
}
jQuery("#destinations").click(function() {
  $(this).data("clicked", true);
});
function branching() {
  if(jQuery("#destinations").data("clicked")) {
    $("#places").show();
  }
}
$(document).ready(function() {
  let idNumber = 1;
  $("form#places").submit(function(event) {
    event.preventDefault();
    let destination = $("#destination").val();
    let year = $("#year").val();
    let landmark = $("#landmark").val();
    $("#destinations").show();
    branching();
    location = new Extra(destination, year, landmark);
  });
});