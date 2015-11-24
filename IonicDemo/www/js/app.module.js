/// <reference path="../typings/tsd.d.ts"/>
(function () {
    'use strict';
    angular.module('app', ['core.module', 'navbar.module'])
        .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                this.StatusBar.styleDefault();
            }
        });
    })
        .config([
        '$ionicConfigProvider', function ($ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom'); // other values: top
        }
    ]);
})();
