$(document).ready(function(){
    // Load home as default for main
    $('#main').load("html/home.html");

    // Load configuration form when Configure is clicked in side nav
    $("#cfg").click(function(){
      $('#main').load("html/configure.html");
    });

    $("#cfg2").click(function(){
      $('#main').load("html/configure.html");
    });

    // Load home screen when Home is clicked in side nav
    $("#home").click(function(){
      $('#main').load("html/home.html");
    });

    $("#home2").click(function(){
      $('#main').load("html/home.html");
    });
  });
