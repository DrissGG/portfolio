
$(document).ready(function () {
    let t = $('.bg-image').height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > calc(t - 20)) {
            $('.navbar').addClass('navbar-scroll');
        } else {
            $('.navbar').removeClass('navbar-scroll');
        }
    });
});
