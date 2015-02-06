'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('SignInCtrl', function($scope, $auth, $state) {

        $scope.submit = function(email, password) {
            $auth.submitLogin({ email: email, password: password })
                .then(function() {
                    $state.go('root.authorized.personaIndex');
                })
                .catch(function(resp) {
                    $scope.errors = resp;
                });
        };
    });