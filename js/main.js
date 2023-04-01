$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $('.header').addClass("fixed")
    } else {
        $('.header').removeClass("fixed")
    }
});
$('a').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false; 
}); 