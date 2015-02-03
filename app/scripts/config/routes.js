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
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        $urlRouterProvider.when('/', '/personas');

        //
        // Now set up the states
        $stateProvider
            .state('root', {
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    authPromise: function($auth) {
                        return { promise: $auth.validateUser() };
                    }
                }
            })
            .state('root.authorized', {
                abstract: true,
                templateUrl: '/views/partials/authorized.html',
                controller: 'MainCtrl',
                resolve: {
                    authAuthorized: function(authPromise, $location) {
                        authPromise.promise
                            .catch(function() {
                                $location.url('/sign_in');
                            });
                    }
                }
            })
            .state('root.authorized.personaIndex', {
                templateUrl: '/views/personas/index.html',
                controller: 'PersonaIndexCtrl',
                url: '^/personas'
            })
            .state('root.authorized.personaShow', {
                abstract: true,
                templateUrl: '/views/personas/show.html',
                controller: 'PersonaCtrl',
                url: '^/personas/:id'
            })
            .state('root.authorized.personaShow.activateForm', {
                templateUrl: '/views/partials/activate_form.html',
                url: '^/personas/:id/activate'
            })
            .state('root.authorized.personaShow.activateFinish', {
                templateUrl: '/views/partials/activate_finish.html',
                url: '^/personas/:id/finish'
            })
            .state('root.unauthorized', {
                abstract: true,
                templateUrl: '/views/partials/unauthorized.html',
                resolve: {
                    authUnauthorized: function(authPromise, $location) {
                        authPromise.promise
                            .then(function() {
                                $location.url('/personas');
                            });
                    }
                }
            })
            .state('root.unauthorized.sessionNew', {
                templateUrl: '/views/sessions/new.html',
                controller: 'SessionsCtrl',
                url: '^/sign_in'
            })
            .state('root.unauthorized.sessionRegistration', {
                templateUrl: '/views/sessions/registration.html',
                controller: 'SessionsCtrl',
                url: '^/sign_up'
            });
    });