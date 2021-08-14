$(document).ready(function() {
  $(".navbar-toggler").click(function () { 
    $(".shoping-card").removeClass("shopingToggle");
    $(".contact-home").animate({"right" : "-100%"},500);
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
  //contact
  $("#contactIcon").click(function () {
    $(".contact-home").animate({"right" : "0"},500);
    $(" .contact-close").addClass("closeIcon");
    $(".shoping-card").removeClass("shopingToggle")
  })

  $(".contact-close").click(function() {
    $(".contact-home").animate({"right" : "-100%"},500);
    $(" .contact-close").removeClass("closeIcon");
  })

  // product-list-show
  $("#btnToggle").click(function() {
    $(".product-list").toggleClass("navShow")
  })

  // client-logo
  $('#client .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

// owlCarousel blog
  $('#blog .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })

  // navber padding
  $(window).scroll(function() {
  let wScroll =  $(window).scrollTop();
    if(wScroll > 200){
      $("nav").addClass("navScroll");
      $("#scrollTop").fadeIn(1200);
      $(".shoping-card").removeClass("shopingToggle");
    $(".home-search").css({"opacity":"0" ,"visibility":"hidden"});
    }else{
      $("nav").removeClass("navScroll");
      $("#scrollTop").fadeOut(1200);
    }
  })

  // scrollTop
  $("#scrollTop").click(function() {
    $("html").animate({scrollTop:"0"},1000)
  })

  // loading
  $("#loading").fadeOut(2000 , function(){
    $("body").css({"overflow":"auto"})
  })
  // wow js
  new WOW().init();
})