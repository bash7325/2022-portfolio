//AOS initialization
AOS.init({
    offset: 350,
    duration: 1000,
  });

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

//on mobile, hide text content of my projects and show the section below to keep the styling consistent

//email functionality may need to add linebreak to the body/message
$("#submit-button").on("click", function (event) {
    event.preventDefault();
    var userEmail = $("#user-email").val().trim();
    var userMessage = $("#user-message").val().trim();
    sendEmail();

    function sendEmail() {
      Email.send({
        SecureToken: "4f7c11b9-5aee-4ecc-9ca6-7583e2fd8d74",
        To: "bash7325@gmail.com",
        From: "bash7325@gmail.com",
        Subject: "Message from my portfolio",
        Body: userMessage + "\n" + userEmail,
      }).then((message) => $("#submit-button").text("Message Sent"));
    }
  });