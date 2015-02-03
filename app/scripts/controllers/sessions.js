'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('SessionsCtrl', function($scope, $auth, $state) {
        $scope.userForm = {};

        $scope.submitSignIn = function(email, password) {
            $auth.submitLogin({ email: email, password: password })
                .then(function() {
                    $state.go('root.authorized.personaIndex');
                })
                .catch(function(resp) {
                    $scope.errors = resp;
                });
        };

        $scope.submitSignUp = function() {
            $auth.submitRegistration($scope.userForm)
                .then(function(resp) {
                    $auth.user = resp.data.data;
                    $state.go('root.authorized.personaIndex');
                })
                .catch(function(resp) {
                    $scope.errors = resp.errors;
                });
        };
    });