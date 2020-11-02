function AddDestination(destination) {
  outputDestination = [];
  outputDestination.push(destination)
}
AddDestination.prototype.addDestination = function(destination) {
  outputDestination.push(destination);
}
$(document).ready(function() {
  landmark = $("#landmark").val();
  year = $("#year").val();
  $("#places").submit(function(event) {
    event.preventDefault();
    let destination = $("input#inputDestination").val();
    $(".year").text($("#year").val());
    $(".landmark").text($("#landmark").val());
    $("#outputDestination").append("<h3 id='" + destination + "'>" + destination + "</h3>");
    $("#" + destination ).after("<p>" + $("#year").val() + "</p>");
    $("#" + destination ).after("<p>" + $("#landmark").val() + "</p>");
    $("p").hide();
  });
  $("#outputDestination").click(function(event) {
    event.preventDefault();
    let destination = $("input#inputDestination").val();
    $("p").hide();
    $("#" + destination).next().show();
    $("#" + destination).next().next().show();
    $("#extras").show();
    //$("outputDestination").hide();
  });
});