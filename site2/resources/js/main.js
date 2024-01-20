$(document).ready( function() {

    const scrollTo = (page) => {
        $('.page-container').animate({
            scrollTop: $('.page-container').scrollTop() - $('.page-container').offset().top + $('.page[id="'+page+'"]').position().top
        }, 500);
    };

    var active = window.location.href.split('#')[1];
    $('.nav-link[href="#'+active+'"').addClass('active');
    if (active)
        scrollTo(active);
    
    $('.nav-link').click((event) => {
        $(event.currentTarget).addClass('active');
        let fromPage  = $('.nav-link.active');
        fromPage.removeClass('active');
        var page = $(event.currentTarget).attr('href').split('#')[1];
        scrollTo(page);
    });

    $('.read-more').click((event) => {
        var page = "info";
        scrollTo(page);
    });
});