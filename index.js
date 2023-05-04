
$(document).ready(function () {
    console.log("pouet")
    let t = $('.monContainer').height();
    console.log(t)
    $(window).scroll(function () {
        if ($(this).scrollTop() > t - 20) {
            $('.navbar').addClass('navbar-scroll');
        } else {
            $('.navbar').removeClass('navbar-scroll');
        }
    });
});
