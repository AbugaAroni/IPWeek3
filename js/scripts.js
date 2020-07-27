$(document).ready(function() {
  $(".clickabledesign").click(function() {
    $("#design").toggle();
    $("#hidedesign").toggle();
  });

  $(".clickabledevelopment").click(function() {
    $("#development").toggle();
    $("#hidedevelopment").toggle();
  });

  $(".clickablepmanagement").click(function() {
    $("#pmanagement").toggle();
    $("#hidepmanagement").toggle();
  });

  $("#hover1").hover(function(){
    $(".box1").toggle();
  });

  $("#hover2").hover(function(){
    $(".box2").toggle();
  });

  $("#hover3").hover(function(){
    $(".box3").toggle();
  });

  $("#hover4").hover(function(){
    $(".box4").toggle();
  });

  $("#hover5").hover(function(){
    $(".box5").toggle();
  });

  $("#hover6").hover(function(){
    $(".box6").toggle();
  });

  $("#hover7").hover(function(){
    $(".box7").toggle();
  });

  $("#hover8").hover(function(){
    $(".box8").toggle();
  });
 });
