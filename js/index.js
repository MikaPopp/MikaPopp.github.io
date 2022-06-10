$(document).ready(function () {
    $(document).on('wheel', function (event) {
        if (event.originalEvent.deltaY !== 0) {
            if (event.originalEvent.deltaY < 0) {
                if ($(".test").css("opacity") == 1) {
                    showAboutMe();
                }
            }
            else {
                if ($(".content-container-about-me").css("opacity") == 1) {
                    showLinks();
                }
            }
        }
    });
});

function showAboutMe() {
    $(".test").fadeOut(500, 0);
    $(".content-container-about-me").fadeTo(500, 1);
    $(".test").css("opacity", 0);
    document.title = "Mikazuo | About Me";
    $("#links-nav").removeClass("active");
    $("#about-me-nav").addClass("active");
}

function showLinks() {
    $(".content-container-about-me").fadeOut(500, 0);
    $(".test").fadeTo(500, 1);
    $(".test").css("opacity", 1);
    $(".content-container-about-me").css("opacity", 0);
    $(".test").css("visibility", "visible");
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