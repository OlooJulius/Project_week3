// toggle items 

$(document).ready(function(){
  $(".icon").click(function(){
    $("#show").toggle();
  });
});
$(document).ready(function(){
  $(".icon2").click(function(){
    $("#show2").toggle();
  });
});
$(document).ready(function(){
  $(".icon3").click(function(){
    $("#show3").toggle();
  });
});
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
function myFunction() {
  alert("We have received your message. Thank you for contacting us.");
}

//portfolio 
// initialize the function
$(document).ready(function(){
  
  // to show p when mouse hovers above the image
  $("#jim").mouseover(function(){
    $("#sudo").show();

 // to show p when mouse hovers from the image
  }).mouseout(function(){
    $("#sudo").hide();
  });

});


$(document).ready(function(){

  $("#sar").mouseover(function(){
    $("#sudo2").show();

  }).mouseout(function(){
    $("#sudo2").hide();
  });
});


$(document).ready(function(){

  $("#john").mouseover(function(){
    $("#sudo3").show();

  }).mouseout(function(){
    $("#sudo3").hide();
  });
});


$(document).ready(function(){

  $("#doe").mouseover(function(){
    $("#sudo4").show();

  }).mouseout(function(){
    $("#sudo4").hide();
  });
});


$(document).ready(function(){

  $("#mark").mouseover(function(){
    $("#sudo5").show();

  }).mouseout(function(){
    $("#sudo5").hide();
  });
});


$(document).ready(function(){

  $("#sol").mouseover(function(){
    $("#sudo6").show();

  }).mouseout(function(){
    $("#sudo6").hide();
  });
});


$(document).ready(function(){

  $("#soul").mouseover(function(){
    $("#sudo7").show();

  }).mouseout(function(){
    $("#sudo7").hide();
  });
});


$(document).ready(function(){

  $("#gen").mouseover(function(){
    $("#sudo8").show();

  }).mouseout(function(){
    $("#sudo8").hide();
  });
});


