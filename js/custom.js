$(function () {
    //we have 2-5 pages with white background
    const maxWhiteIndex = 5;
    $(window).scroll(function () {
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
    });
});