$(function(){
    $('.hamburger').click(function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
            $(this).addClass('close');
        } else {
            $('#header').addClass('open');
            $(this).removeClass('close');
        }
    });
});