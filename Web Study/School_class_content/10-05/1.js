$('.menu li').mouseenter(function(){
    $('.submenu').stop().slideDown();
});
$('.menu li').mouseleave(function(){
    $('.submenu').stop().slideUp();
});