/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    var $demoContainer = $('.demo');
    var $scrollHomescreen = $('.scroll-homescreen');
    var $fxosHeroSpace = $('.fxos-hero-space');
    var $phoneViewContainer = $('.phone');

    /**
     * Switches the state of the hero area from full to demo view.
     */
    function switchState(eventTarget) {
        // entering demo mode, trim the container height
        $fxosHeroSpace.toggleClass('trim-height');
        // scales and fades the large phone image
        $phoneViewContainer.toggleClass('scale');
        // activate the demo area
        $demoContainer.toggleClass('active');
        // make the homescreen anim play
        $scrollHomescreen.toggleClass('animate');
    }

    $demoContainer.on('click', 'a', function(event) {
        var targetID = event.target.id;
        var $swipeApps = $('.swipe-apps');

        // close the demo view and switch back to default
        if (targetID === 'close_demo') {
            switchState();
            return;
        }

        // show the scroll homescreen animation
        if (targetID === 'scroll_homescreen') {
            $swipeApps.removeClass('animate').hide();
            // show homescreen and make it play
            $scrollHomescreen.addClass('animate').show();
            return;
        }

        if (targetID === 'swipe_apps') {
            $scrollHomescreen.removeClass('animate').hide();
            // show swipe apps anim and make it play
            $swipeApps.addClass('animate').show();
            return;
        }
    });

    var $interactionTrigger = $('#interaction-trigger');

    $interactionTrigger.click(function(event) {
        event.preventDefault();
        switchState();
    });

})(jQuery);
