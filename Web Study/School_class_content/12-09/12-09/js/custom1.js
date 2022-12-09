/* Navigation */
$('.menu li').mouseenter(function(){
    $('.sub-menu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $('.sub-menu').stop().slideUp()
})

$(function(){
    var num = 0;
    $('.slide > div a').eq(num).addClass('active');

    setInterval(function() {
        if(num < 2){
            num++;
        } 
        else {
            num = 0;
        }
        $('.slide > div a').eq(num).removeClass('active');
        $('.slide > div a').eq(num).addClass('active');
    }, 3500);
});