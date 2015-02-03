'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('MainCtrl', function($scope, $auth, $state) {

        $scope.currentUser = $auth.user;

        $scope.signOut = function() {
            $auth.signOut()
                .then(function() {
                    $state.go('root.unauthorized.sessionNew');
                });
        };
    });