/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    var $interactionTrigger = $('#interaction-trigger');
    var $demoPhoneContainer = $('.demo-phone-container');

    $interactionTrigger.click(function(event) {
        event.preventDefault();

        $(this).parents('.phone').addClass('scale');
        $demoPhoneContainer.addClass('active');
    })

})(jQuery);
