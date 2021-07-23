$(document).ready(function() {
  $(".navbar-toggler").click(function () { 
    $(".shoping-card").removeClass("shopingToggle");
    $(this).toggleClass("close");
  });


  // search 
  $("#searchIcon").click(function() {
    $(".shoping-card").removeClass("shopingToggle");
    $(".home-search").css({"opacity":"1" ,"visibility":"visible"});
    $(".home-search form").animate({"width":"70%"},500);
  })

  $("#searchClose").click(function() {
    $(".home-search").css({"opacity":"0" ,"visibility":"hidden"});
    $(".home-search form").animate({"width":"30%"},500);
  })
  // counterOne
  var textOne = $("#textCounterOne").text();
  $("#btnPlusOne").click(function() {
    $("#textCounterOne").text(++textOne)
  })

  $("#btnMaunsOne").click(function() {
    if(textOne != 1){
      $("#textCounterOne").text(--textOne);
    }
  })
  //counterTwo
  var textTwo = $("#textCounterTwo").text();
  $("#btnPlusTwo").click(function() {
    $("#textCounterTwo").text(++textTwo)
  })
  $("#btnMaunsTwo").click(function() {
    if(textTwo != 1){
      $("#textCounterTwo").text(--textTwo)
    }
  })
  // shopingToggle
  $("#shoppingIcon").click(function() {
    $(".shoping-card").toggleClass("shopingToggle");
  })
})