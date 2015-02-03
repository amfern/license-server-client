'use strict';

/**
 * @ngdoc overview
 * @name personaMarketApp
 * @description
 * # personaMarketApp
 *
 * Routers module of the application.
 */
angular
    .module('personaMarketApp')
    .config(function($authProvider) {
        $authProvider.configure({
            apiUrl: '/api/v1/users'
        });
    });