(function($) {
    "use strict";
    if (jQuery.browser.mobile) {

        var bgImage = 'img/background/bg-1.jpg';

        $('#header').append('<div style="background-image: url(' + bgImage + ');" class="fullscreen-bg"></div>');

    } else {

        $(function() {
            $.supersized({
                horizontal_center: 1,
                keyboard_nav: 0,
                slide_interval: 3000,
                transition: 1,
                transition_speed: 1000,
                slide_links: 'false',
                slides: [{
                        image: 'img/background/bg-1.jpg',
                        title: '',
                        thumb: '',
                        url: ''
                    },

                    {
                        image: 'img/background/bg-2.jpg',
                        title: '',
                        thumb: '',
                        url: ''
                    },

                    {
                        image: 'img/background/bg-3.jpg',
                        title: '',
                        thumb: '',
                        url: ''
                    }
                ]
            });
        });
    };
})
(jQuery);