function scrollMenu(){
  if($(window).scrollTop() > 120){
    $(".header-top").addClass("fixed-top");
    $(".gototop").fadeIn();
    $('.gototop2').fadeIn(1000);
  }
  else{
    $(".header-top").removeClass("fixed-top");
    $('.gototop').fadeOut(1000);
    $('.gototop2').fadeOut();
  }
}

scrollMenu();
$(window).on("scroll", function(){
  scrollMenu();
});

var scroll = new SmoothScroll('a[href*="#"]', {
  offset: 20
});
