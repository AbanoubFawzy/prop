$(document).ready(function () {
    // smooth scroll 
    $(".nav-link").click(function(){
        let secname = $(this).attr('href');
        let secOffset = $(secname).offset().top;
        $("html, body").animate({scrollTop : secOffset+100},2000);
    })

    // typed function
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    // arrow go to down
    $(Window).scroll(function () {
        var windowscroll = $(this).scrollTop();
        if (windowscroll < 100) {
            $(".fa-arrow-down").fadeIn(500);
        }
        else {
            $(".fa-arrow-down").fadeOut(500);
        }
    });

    //arrow go to up
    $(Window).scroll(function () {
        var windowscroll = $(this).scrollTop();
        if (windowscroll > 100) {
            $(".gotoup").fadeIn(500);
            $(".navbar").css({ backgroundColor: '#5d5d5d' });
        }
        else {
            $(".gotoup").fadeOut(500);
            $(".navbar").css({ backgroundColor: 'transparent' });
        }
    });

    $(".gotoup").click(function(){
        $("html, body").animate({scrollTop : 0},2000);
    })
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    // sevices section
    $(".srvice-item").hover(function(){
        $(this).addClass("shadow-lg");
    },
    function(){
        $(this).removeClass("shadow-lg")
    }
    )


     // Portfolio isotope and filter
     var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

});