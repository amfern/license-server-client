'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('SignUpCtrl', function($scope, $auth, $state, phones) {

        $scope.phones = phones.data.phones;
        // $scope.userForm = {
        //     phone: $scope.phones[0].real
        // };

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