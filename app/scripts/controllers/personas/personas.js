'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('PersonaIndexCtrl', function($scope, $http, licenses) {

        $scope.userPersonas = {};
        angular.forEach(licenses.data.licenses, function(value, key) {
            $scope.userPersonas[value.persona] = value;
        });
    });