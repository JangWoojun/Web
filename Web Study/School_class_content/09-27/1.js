// $('.menu li').mouseenter(function(){
//     $(this).children('.submenu').stop().slideDown();
// });
// $('.menu li').mouseleave(function(){
//     $(this).children('.submenu').stop().slideUp();
// });
$('.menu li').mouseenter(function(){
    $('.submenu').stop().slideDown();
});
$('.menu li').mouseleave(function(){
    $('.submenu').stop().slideUp();
});