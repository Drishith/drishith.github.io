$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".goTop").fadeIn();
      $(".navbar").addClass("sticky");
    }
    else{
      $(".goTop").fadeOut();
      $(".navbar").removeClass("sticky");
    }
  });

  $(".goTop").click(function(){scroll(0,0)});
  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});