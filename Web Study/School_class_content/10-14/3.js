$('.menu > li').click(function(){
    $(this).find('.submenu').stop().slideToggle();
});
