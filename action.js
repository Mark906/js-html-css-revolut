$(document).ready(function(){
  $(".into-navbar-right ul li").mouseenter(function(){
    $(".dropdown-menu").css("display", "block");
  });
  $(".into-navbar-right ul li").mouseleave(function(){
    $(".dropdown-menu").css("display", "none");
  });
});
