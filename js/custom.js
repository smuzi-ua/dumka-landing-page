$(function () {
    //we have 2-5 pages with white background
    const maxWhiteIndex = 5;
    function onScrollFunc() {
        if ($(this).scrollTop() >= $(window).height() &&
            $(this).scrollTop() < maxWhiteIndex * $(window).height()) {
            $('#navbar-logo-white').hide();
            $('#navbar-logo-purple').show();

            $('.navbar').removeClass('bg-part-purple');
            $('.navbar').addClass('bg-white');
        }
        if ($(this).scrollTop() < $(window).height() ||
            $(this).scrollTop() >= maxWhiteIndex * $(window).height()) {
            $('#navbar-logo-white').show();
            $('#navbar-logo-purple').hide();

            $('.navbar').addClass('bg-part-purple');
            $('.navbar').removeClass('bg-white');
        }
        if ($(this).scrollTop() < maxWhiteIndex * $(window).height()) {
            $('#social-icons-block').addClass('social-icons-block');
            $('#social-icons-block').removeClass('social-icons-row');
        }
        if ($(this).scrollTop() >= maxWhiteIndex * $(window).height()) {
            $('#social-icons-block').addClass('social-icons-row');
            $('#social-icons-block').removeClass('social-icons-block');
        }
    }
    onScrollFunc();
    $(window).scroll(onScrollFunc);
});