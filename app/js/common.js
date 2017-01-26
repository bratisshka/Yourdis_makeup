$(function () {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    // jQuery('.sf-menu').superfish();


    //Mobilde menu toggle
    $("#my-menu").mmenu({
        extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: 'Меню'
        }
    });
    var menuAPI = $("#my-menu").data("mmenu");
    menuAPI.bind("closed", function () {
        $(".toggle-mnu").removeClass("on");
    });

    $(".mobile-mnu").click(function () {
        menuAPI.open();
        var thiss = $(".toggle-mnu");
        thiss.toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    //Carousel
    var owl = $(".slider");
    owl.owlCarousel({
        loop: true,
        items: 1,
        // itemClass: "slide",
        nav: true,
        navText: ""
    });

    $(".owl-next").click(function () {
        owl.trigger('next.owl.carousel');
    });
    $(".owl-prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });


});
