
//scroll to top button
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$(document).ready(function () {
    $("#toTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
})

//AOS initialization
AOS.init({
    offset: 350,
    duration: 1000,
  });

//on mobile, hide text content of my projects and show the section below to keep the styling consistent