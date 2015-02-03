'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('PersonaCtrl', function($scope, $stateParams, $state, $http) {

        $scope.personaId = $stateParams.id;
        $scope.persona = $scope.personas[$scope.personaId];

        $scope.purchase = function() {
            $http.post('/api/v1/users/user/licenses', {
                    license: {
                        persona: $scope.personaId
                    }
                })
                .success(function() {
                    $state.go('root.authorized.personaShow.activateFinish');
                })
                .error(function() {
                    
                });
        };
    });