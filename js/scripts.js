//business logic
var name;
var email;
var message;

//user logic
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

//collect info from the form

 $("form").submit(function(){
  event.preventDefault();
  name = $("input#name").val();
  email = $("input#email").val();
  message = $("input#message").val();
  alert("Dear " + name + ", we have recieved your message thank you for reaching out to us");
});

 });
