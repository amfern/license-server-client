'use strict';

/**
 * @ngdoc overview
 * @name personaMarketApp
 * @description
 * # personaMarketApp
 *
 * Main module of the application.
 */
angular
    .module('personaMarketApp', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        $urlRouterProvider.when('/', '/personas');

        //
        // Now set up the states
        $stateProvider
            .state('authorized', {
                templateUrl: '/views/partials/authorized.html'
            })
            .state('authorized.personaIndex', {
                templateUrl: '/views/personas/index.html',
                controller: 'PersonasCtrl',
                url: '^/personas'
            })
            .state('authorized.personaShow', {
                templateUrl: '/views/personas/show.html',
                controller: 'PersonasCtrl',
                url: '^/personas/:id'
            })
            .state('authorized.personaShow.activateForm', {
                templateUrl: '/views/partials/activate_form.html',
                url: '^/personas/:id/activate'
            })
            .state('authorized.personaShow.activateFinish', {
                templateUrl: '/views/partials/activate_finish.html',
                url: '^/personas/:id/finish'
            })
            .state('unauthorized', {
                templateUrl: '/views/partials/unauthorized.html'
            })
            .state('unauthorized.sessionNew', {
                templateUrl: '/views/sessions/new.html',
                url: '^/sign_in'
            });
    });