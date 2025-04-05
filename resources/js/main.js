$(document).ready( function() {

    $.getJSON('https://raw.githubusercontent.com/prithviraj-chaudhuri/prithviraj-chaudhuri.github.io/master/resources/data/site-content.json', function(jd) {
        $("#page-body").tmpl(jd).appendTo("#body");

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

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('.navbar a.active')?.classList.remove('active');
            this.classList.add('active');
        });
    });

    document.addEventListener('keydown', function (event) {
        const links = Array.from(document.querySelectorAll('.navbar a'));
        const activeLink = document.querySelector('.navbar a.active');
        let currentIndex = links.indexOf(activeLink);

        if (event.key === 'ArrowDown') {
            // Move to the next link
            if (currentIndex < links.length - 1) {
                navigate(links, currentIndex, currentIndex + 1);
            }
        } else if (event.key === 'ArrowUp') {
            // Move to the previous link
            if (currentIndex > 0) {
                navigate(links, currentIndex, currentIndex - 1);
            }
        } else if (event.key === 'Enter') {
            // Navigate to the selected link
            activeLink?.click();
        }
    });

    function navigate(links, oldIndex, newIndex) {
        links[oldIndex]?.classList.remove('active');
        links[newIndex].classList.add('active');
        links[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        links[newIndex].click();
    }

});