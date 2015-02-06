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
            apiUrl: '/api/v1/users',
            tokenValidationPath:     '/validate_token',
            signOutUrl:              '/sign_out',
            emailRegistrationPath:   '',
            accountUpdatePath:       '',
            accountDeletePath:       '',
            confirmationSuccessUrl:  window.location.href,
            passwordResetPath:       '/password',
            passwordUpdatePath:      '/password',
            passwordResetSuccessUrl: window.location.href,
            emailSignInPath:         '/sign_in',
            storage:                 'cookies'
        });
    });