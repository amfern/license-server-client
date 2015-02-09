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
    .config(function($httpProvider) {
        $httpProvider.interceptors.push(function($q, $rootScope, $parse) {
            $rootScope.feedback = {};

            $rootScope.$on('$stateChangeSuccess', function(){
                $rootScope.feedback.errors = false;
            });

            return {
                requestError: function(rejection) {
                    debugger
                    return $q.reject(rejection);
                },
                // optional method
                responseError: function(rejection) {
                    var err = $parse('data.errors.full_messages')(rejection);
                    err = err || $parse('data.errors')(rejection);

                    if(err) {
                        $rootScope.feedback.errors = err;
                    }

                    return $q.reject(rejection);
                }
            };
        });
    });