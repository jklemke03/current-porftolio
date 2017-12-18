$(document).ready(function() {
    $(".project-img").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
        $('.hover').show();
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
});
