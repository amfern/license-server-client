'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('SignUpCtrl', function($scope, $auth, $state) {

        $scope.userForm = { };

        $scope.submit = function() {
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