/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    var $demoContainer = $('.demo');
    var $fxosHeroSpace = $('.fxos-hero-space');
    var $phoneViewContainer = $('.phone');

    var $stage = $('.stage');
    var $scrollHomescreen = $('.scroll-homescreen');
    var $swipeApps = $('.swipe-apps');

    /**
     * Toggles the active-state class on all links in the container, essentially
     * causing the newly active link to be set to active.
     * @params {object} container - The container in which to find the links.
     * @params {object} [button] - An optional button argument to specify which
     *                             element to set as active.
     */
    function setActiveButton(container, button) {
        if (button) {
            $('li > a', container).removeClass('active-state');
            button.addClass('active-state');
        } else {
            $('li > a', container).toggleClass('active-state');
        }
    }

    /**
     * Switches the state of the hero area from full to demo view.
     * @param {object} [demo] - The demo to enable and animate
     */
    function switchState(demo) {
        // hide both demos and ensure animation is disabled
        $stage.removeClass('animate');

        // entering demo mode, trim the container height
        $fxosHeroSpace.toggleClass('trim-height');
        // scales and fades the large phone image
        $phoneViewContainer.toggleClass('scale');
        // activate the demo area
        $demoContainer.toggleClass('active');

        // if a demo was specified show and enable animation
        if (demo) {
            demo.addClass('animate');
            setActiveButton($demoContainer, $(demo.data('button')));
        }
    }

    $phoneViewContainer.on('click', 'a', function(event) {

        var targetID = event.currentTarget.id;

        if (targetID !== '') {
            event.preventDefault();
            var demo = targetID === 'trigger-swipe' ? $swipeApps : $scrollHomescreen;
            switchState(demo);
        }
    });

    $demoContainer.on('click', 'a', function(event) {

        event.preventDefault();
        var targetID = event.currentTarget.id;

        if (targetID === 'close-demo') {
            // close the demo view and switch back to default
            switchState();
        } else if (targetID === 'scroll-homescreen') {
            // show the scroll homescreen animation
            $swipeApps.removeClass('animate');
            setActiveButton($demoContainer);
            $scrollHomescreen.addClass('animate');
        } else if (targetID === 'swipe-apps') {
            // show swipe apps anim and make it play
            $scrollHomescreen.removeClass('animate');
            setActiveButton($demoContainer);
            $swipeApps.addClass('animate');
        }
    });

})(jQuery);
