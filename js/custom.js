$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height()) {
            $('#navbar-logo-white').hide();
            $('#navbar-logo-purple').show();
        }
        if ($(this).scrollTop() < $(window).height()) {
            $('#navbar-logo-white').show();
            $('#navbar-logo-purple').hide();
        }
    });
});