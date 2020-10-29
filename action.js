$(document).ready(function(){
  $(".into-navbar-right ul li").mouseenter(function(){
    $(".dropdown-menu").css("display", "block");
  });
  $("#dropdown").mouseleave(function(){
    $(".dropdown-menu").css("display", "none");
  });
});
