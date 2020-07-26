$(document).ready( function() {

    var active = window.location.href.split('#')[1];
    $('.navigator[data-href="'+active+'"').addClass('active');
    if (active)
        scrollTo(active);

    $('[data-toggle="tooltip"]').tooltip();

    $('.navigator').on('click', function() {
        var page = $(this).data('href');
        window.location.href = '#'+page;

        var fromPage  = $('.navigator.active');
        fromPage.removeClass('active');
        
        $('.navigator[data-href="'+page+'"').addClass('active');
        scrollTo(page);
    });

    $('.download-cv').on('click', function() {
        window.open('./resources/assets/downloads/Prithviraj%20Chaudhuri%20Resume.pdf' , '_blank');
    });

    
    function scrollTo(page) {
        $('.main-content').animate({
            scrollTop: $('.main-content').scrollTop() - $('.main-content').offset().top + $('.page[data-page="'+page+'"]').position().top
        }, 500);
    }

});