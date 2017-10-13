/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    console.log(Mozilla.TrafficCop);

    var cop = new Mozilla.TrafficCop({
        id: 'experiment_send_tabs',
        variations: {
            'v=a': 10,  // double-control
            'v=b': 10   // membership experiment
        }
    });

    cop.init();
})(window.Mozilla);
