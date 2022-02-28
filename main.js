$(document).ready(function (){
    $('body').scrollspy({ target: '.navbar', offset: 100 });

    $('.nav-link').on('click', function(){
        var clickedItem = $(this).attr('href');
       $('html, body').animate({
            scrollTop: $(clickedItem).offset().top - 80
       }, 500);
    });

});
