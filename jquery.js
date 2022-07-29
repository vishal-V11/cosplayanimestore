$(document).ready(function(){
    $('.prdt-img').mouseover(function(){
        $(this).fadeTo(2000,0.4);
    });
    $('.prdt-img').mouseleave(function(){
        $(this).fadeTo(2000,1);
    });
});