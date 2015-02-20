/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    var $demoContainer = $('.demo');
    var $scrollHomescreen = $('.scroll-homescreen');

    $demoContainer.on('click', 'a', function(event) {
        var eventTarget = event.target;
        var $swipeApps = $('.swipe-apps');

        // show the scroll homescreen animation
        if (eventTarget.id === 'scroll_homescreen') {
            $swipeApps.removeClass('animate').hide();
            // show homescreen and make it play
            $scrollHomescreen.addClass('animate').show();
        }

        if (eventTarget.id === 'swipe_apps') {
            $scrollHomescreen.removeClass('animate').hide();
            // show swipe apps anim and make it play
            $swipeApps.addClass('animate').show();
        }
    });

    var $interactionTrigger = $('#interaction-trigger');

    $interactionTrigger.click(function(event) {
        event.preventDefault();

        // scales and fades the large phone image
        $(this).parents('.phone').addClass('scale');
        // activate the demo area
        $demoContainer.addClass('active');
        // make the homescreen anim play
        $scrollHomescreen.addClass('animate')
    })

})(jQuery);
