$(document).ready(function(){
  $(".icon").click(function(){
    $(".show").toggle();
  });
});
$(document).ready(function(){
  $(".icon2").click(function(){
    $(".show2").toggle();
  });
});
$(document).ready(function(){
  $(".icon3").click(function(){
    $(".show3").toggle();
  });
});
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
function myFunction() {
  alert("We have received your message. Thank you for contacting us.");
}