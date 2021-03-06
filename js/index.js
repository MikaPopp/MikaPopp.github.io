$(document).ready(function () {
    if ($(window).width() < 992) {
        $("#navbar-main").addClass("navbar-light");
    }
    else {
        $("#navbar-main").removeClass("navbar-light");
    }
    $(document).on('wheel', function (event) {
        if (!($(window).height() < 833 || $(window).width() < 1059)) {
            if (event.originalEvent.deltaY !== 0) {
                if (event.originalEvent.deltaY < 0) {
                    if ($(".links-container").css("opacity") == 1) {
                        showAboutMe();
                    }
                }
                else {
                    if ($(".content-container-about-me").css("opacity") == 1) {
                        showLinks();
                    }
                }
            }
        }
    });
});

$(window).resize(function () {
    if ($(window).width() < 992) {
        $("#navbar-main").addClass("navbar-light");
    }
    else {
        $("#navbar-main").removeClass("navbar-light");
    }
});

function showAboutMe() {
    $("#about-me-h1").css("visibility", "hidden");
    $("#about-me-h2").css("visibility", "hidden");
    $("#about-me-p").css("visibility", "hidden");
    $(".links-container").fadeOut(500, 0);
    $(".content-container-about-me").fadeTo(500, 1);
    $(".links-container").css("opacity", 0);
    document.title = "Mikazuo | About Me";
    $("#links-nav").removeClass("active");
    $("#about-me-nav").addClass("active");
}

function showLinks() {
    $(".content-container-about-me").fadeOut(500, 0);
    $(".links-container").fadeTo(500, 1);
    $(".links-container").css("opacity", 1);
    $(".content-container-about-me").css("opacity", 0);
    $(".links-container").css("visibility", "visible");
    document.title = "Mikazuo | Links";
    $("#about-me-nav").removeClass("active");
    $("#links-nav").addClass("active");
}

function changePageLinks() {
    if (!$("#links-nav").hasClass("active")) {
        showLinks();
    }
}

function changePageAboutMe() {
    if (!$("#about-me-nav").hasClass("active")) {
        showAboutMe();
    }
}

function showMore() {
    if ($("#about-me-h1").css("visibility") == "hidden" || $("#about-me-h1").css("opacity") == 0) {
        $("#about-me-h1").css('visibility', 'visible').animate({ opacity: 1.0 }, 700);
        $("#about-me-h2").css('visibility', 'visible').animate({ opacity: 1.0 }, 700);
        $("#about-me-p").css('visibility', 'visible').animate({ opacity: 1.0 }, 700);
    } else {
        $("#about-me-h1").animate({ opacity: 0 }, 700);
        $("#about-me-h2").animate({ opacity: 0 }, 700);
        $("#about-me-p").animate({ opacity: 0 }, 700);
    }
}