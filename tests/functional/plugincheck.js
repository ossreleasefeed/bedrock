/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global casper */
'use strict';

var config = require('../lib/config');
var helpers = require('../lib/helpers');
var path = '/plugincheck/';
var url = config.base() + path;

casper.options.pageSettings.loadPlugins = true;

casper.test.begin('PluginCheck, conditional content: ' + url, 6, function suite(test) {

    casper.start();

    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:38.0) Gecko/20100101 Firefox/38.0');

    casper.thenOpen(url, function() {

        test.assertHttpStatus(200);

        test.assertVisible('.plugin-status-container h2', 'Plugin Status heading exists');
        test.assertNotVisible('.not-supported', 'Unsupported browser message not visible');

        casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36');
    });

    casper.thenOpen(url, function() {

        test.assertHttpStatus(200);

        test.assertVisible('.not-supported', 'Unsupported browser message visible');
        test.assertNotVisible('.plugin-status-container h2', 'Plugin Status heading not visible');
    });

    casper.run(function() {
        test.done();
        helpers.done();
    });
});

casper.test.begin('PluginCheck, outated Firefox: ' + url, 2, function suite(test) {

    casper.start();

    casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:33.0) Gecko/20100101 Firefox/33.0');

    casper.thenOpen(url, function() {
        test.assertHttpStatus(200);
        test.assertVisible('.version-message-container', 'Update Firefox button visible');
    });

    casper.run(function() {
        test.done();
        helpers.done();
    });
});

casper.test.begin('PluginCheck, Download button present: ' + url, 3, function suite(test) {

    casper.start(url, function() {

        // get the classList and split it into an array
        var classList = this.getElementAttribute('html', 'class').split(' ');
        var href = this.getElementAttribute('.download-list .os_' + classList[0] + ' .download-link', 'href');

        test.assertHttpStatus(200);

        test.assertVisible('.download-list .os_' + classList[0], 'Download button for current OS visible');
        test.assert(href.indexOf('scene=2#download-fx') !== -1, 'Download button has correct link destination');
    });

    casper.run(function() {
        test.done();
        helpers.done();
    });
});

casper.test.begin('PluginCheck, Click download button: ' + url, 2, function suite(test) {

    casper.start(url, function() {

        // get the classList and split it into an array
        var classList = this.getElementAttribute('html', 'class').split(' ');

        test.assertHttpStatus(200);
        this.click('.download-list .os_' + classList[0] + ' .download-link');

    });

    casper.waitForUrl(config.base() + '/firefox/new/?scene=2', function() {
        test.assert(true, 'User sent to firefox/new, scene2');
    });

    casper.run(function() {
        test.done();
        helpers.done();
    });

});
