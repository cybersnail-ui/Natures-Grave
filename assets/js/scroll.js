$( document ).ready(function() {
    console.log( "ready!" );

    $('#menu-btn').click(function() {
        $("#menu").fadeToggle(250);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#about-btn').click(function() {
        $("#about-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#video-btn').click(function() {
        $("#video-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#gallery-btn').click(function() {
        $("#gallery-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#character-btn').click(function() {
        $("#character-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#concept-btn').click(function() {
        $("#concept-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#download-btn').click(function() {
        $("#download-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

    $('#team-btn').click(function() {
        $("#team-sec")[0].scrollIntoView({
            behavior: "instant", // or "auto" or "instant"
            block: "start" // or "end"
        });
        $("#menu").fadeToggle(750);
        $('html').toggleClass("scroll-overflow");
        $('#menu-btn').toggleClass("menu-btn-active");
    });

});