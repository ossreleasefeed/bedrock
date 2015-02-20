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

    /**
     * Toggles the active-state class on all links in the container, essentially
     * causing the newly active link to be set to active.
     * @params {object} container - The container in which to find the links.
     */
    function setActiveButton(container) {
        $('li > a', container).toggleClass('active-state');
    }

    $demoContainer.on('click', 'a', function(event) {
        var eventTarget = event.target;
        var targetID = eventTarget.id;
        var $swipeApps = $('.swipe-apps');

        if (targetID === 'close_demo') {
            // close the demo view and switch back to default
            switchState();
        } else if (targetID === 'scroll_homescreen') {
            // show the scroll homescreen animation
            $swipeApps.removeClass('animate').hide();
            $scrollHomescreen.addClass('animate').show();

            setActiveButton($demoContainer);

        } else if (targetID === 'swipe_apps') {
            // show swipe apps anim and make it play
            $scrollHomescreen.removeClass('animate').hide();
            $swipeApps.addClass('animate').show();

            setActiveButton($demoContainer);
        }
    });

    var $interactionTrigger = $('#interaction-trigger');

    $interactionTrigger.click(function(event) {
        event.preventDefault();
        switchState();
    });

})(jQuery);
