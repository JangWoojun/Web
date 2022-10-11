$('.menu li').mouseenter(function(){
    $('.submenu,.sub-back').stop().slideDown();
});
$('.menu li').mouseleave(function(){
    $('.submenu,.sub-back').stop().slideUp();
});