'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('PersonaIndexCtrl', function($scope, $http) {

        $http.get('/api/v1/users/user/licenses')
            .then(function(resp) {
                $scope.userPersonas = {};
                angular.forEach(resp.data.licenses, function(value, key) {
                    $scope.userPersonas[value.persona] = value;
                });
            });

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