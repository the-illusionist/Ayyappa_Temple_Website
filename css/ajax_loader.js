$(document).ready(function(){
  $("#h").click(function(){
    $("#main").load("index.html #main > *");
  });
  $("#a1").click(function(){
    $("#main").load("about_temple.html #main > *");
  });
  $("#a2").click(function(){
    $("#main").load("offerings.html #main > *");
  });
  $("#a3").click(function(){
    $("#main").load("festivals.html #main > *");
  });
  $("#a4").click(function(){
    $("#main").load("reach_temple.html #main > *");
  });
  $("#c").click(function(){
    $("#main").load("administration.html #main > *");
  });
  $("#e").click(function(){
    $("#main").load("contact_us.html #main > *");
  });
  $("#l1").click(function(){
    $("#main").load("lord_ayyappa.html #main > *");
  });
  $("#l2").click(function(){
    $("#main").load("sree_durga.html #main > *");
  });
  $("#l3").click(function(){
    $("#main").load("sree_ganesh.html #main > *");
  });
  $("#l4").click(function(){
    $("#main").load("navagraha.html #main > *");
  });
  $("#dis").click(function(){
    $("#main").load("disclaimer.html #main > *");
  });
  $("#sm").click(function(){
    $("#main").load("site_map.html #main > *");
  });
});