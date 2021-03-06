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
                templateUrl: '/views/root.html'
            })
            .state('root.authorized', {
                abstract: true,
                templateUrl: '/views/partials/authorized.html',
                controller: 'MainCtrl',
                resolve: {
                    authorization: function($auth, $state) {
                        return $auth.validateUser()
                            .catch(function() {
                                $state.go('root.unauthorized.sessionNew');
                            });
                    }
                }
            })
            .state('root.authorized.personaIndex', {
                templateUrl: '/views/personas/index.html',
                controller: 'PersonaIndexCtrl',
                url: '^/personas',
                resolve: {
                    licenses: function($http) {
                        return $http.get('/api/v1/users/user/licenses.json');
                    }
                }
            })
            .state('root.authorized.personaShow', {
                abstract: true,
                templateUrl: '/views/personas/show.html',
                controller: 'PersonaCtrl',
                url: '^/personas/:id',
                resolve: {
                    licenses: function($http) {
                        return $http.get('/api/v1/users/user/licenses.json');
                    }
                }
            })
            .state('root.authorized.personaShow.activateForm', {
                templateUrl: '/views/partials/activate_form.html',
                url: '^/personas/:id/activate'
            })
            .state('root.authorized.personaShow.activateFinishPersona', {
                templateUrl: '/views/partials/activate_finish_persona.html',
                url: '^/personas/:id/finish'
            })
            .state('root.authorized.personaShow.activateFinishLine', {
                templateUrl: '/views/partials/activate_finish_line.html',
                url: '^/personas/:id/finish'
            })
            .state('root.authorized.personaDestroyAll', {
                url: '^/personas/destroy_all',
                resolve: {
                    destroyAllLicenses: function($http, $auth, $state) {
                        return $http.delete('api/v1/users/user/licenses/destroy_all.json', { headers: $auth.retrieveData('auth_headers') })
                            .then(function() {
                                $state.go('root.authorized.personaIndex');
                            });
                    }
                }
            })
            .state('root.unauthorized', {
                abstract: true,
                templateUrl: '/views/partials/unauthorized.html',
                resolve: {
                    authorization: function($auth, $state, $q) {
                        var deferred = $q.defer();

                        $auth.validateUser()
                            .then(function() {
                                $state.go('root.authorized.personaIndex');
                                deferred.reject();
                            })
                            .catch(function() {
                                deferred.resolve();
                            });

                        return deferred.promise;
                    }
                }
            })
            .state('root.unauthorized.sessionNew', {
                templateUrl: '/views/sessions/sign_in.html',
                controller: 'SignInCtrl',
                url: '^/sign_in'
            })
            .state('root.unauthorized.sessionRegistration', {
                templateUrl: '/views/sessions/sign_up.html',
                controller: 'SignUpCtrl',
                url: '^/sign_up'
            });
    });