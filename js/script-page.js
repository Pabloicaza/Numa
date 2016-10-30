(function($) {
    "use strict";
    var $window = $(window),
        navHeight = $('.nav').height();
    $('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.nav').toggleClass('open');
        return false;
    });
    $window.on('resize', function() {
        navHeight = $('.nav').height();
        updateNavContainer(navHeight);
    });
    updateNavContainer(navHeight);
    $("#header").waypoint({
        handler: function(direction) {
            $(".nav-header").toggleClass('blackout', direction === 'down');
        },
        offset: function() {
            return -($(".nav-header").outerHeight() - 50);
        }
    });
    $(".carousel").owlCarousel({
        navigation: false,
        autoPlay: true,
        slideSpeed: 1500,
        paginationSpeed: 1500,
        singleItem: true
    });
    $(".video").fitVids();

    function updateNavContainer(navHeight) {
        var winHeight = $window.height(),
            winWidth = $window.width(),
            scrollHeight = Math.floor(winHeight - 90);
        if (winWidth <= '767' && scrollHeight <= navHeight) {
            $('.nav').css({
                'overflow-y': 'scroll',
                'height': scrollHeight
            });
        } else {
            $('.nav').removeAttr('style');
        }
    }
})(jQuery);