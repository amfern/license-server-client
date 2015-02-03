'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('SessionsCtrl', function($scope, $auth, $location) {

        $scope.submitLogin = function(email, password) {
            $auth.submitLogin({ email: email, password: password })
                .then(function() {
                    $location.url('/personas');
                })
                .catch(function(resp) {
                    $scope.errors = resp;
                });
        };

        $scope.submitRegistration = function(email, password, passwordConfirmation) {
            $auth.submitLogin({ 
                    email: email, 
                    password: password, 
                    passwordConfirmation: passwordConfirmation
                })
                .then(function() {
                    $location.url('/personas');
                })
                .catch(function(resp) {
                    $scope.errors = resp;
                });
        };
    });