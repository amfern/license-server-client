'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('PersonaCtrl', function($scope, $stateParams, $state, $http, $filter, ngDialog, licenses) {

        $scope.personaId = $stateParams.id;
        $scope.persona = $scope.personas[$scope.personaId];
        $scope.totalPayment = 0;
        $scope.lineCost = 4.99;
        $scope.personaCost = 3.99;
        $scope.currentLicense = $filter('filter')(licenses.data.licenses, {persona: $scope.personaId})[0];
        $scope.isPersonaPurshased = !!$scope.currentLicense;


        $scope.purchasePersona = function() {
            $http.post('/api/v1/users/user/licenses.json', {
                    license: {
                        persona: $scope.personaId,
                        phone: $scope.phone
                    }
                })
                .success(function() {
                    $state.go('root.authorized.personaShow.activateFinishPersona');
                })
                .error(function() {
                    
                });
        };

        $scope.purchaseLine = function() {
            $http.put('/api/v1/users/user/licenses/' + $scope.currentLicense.id + '.json', {
                    license: {
                        phone: $scope.phone
                    }
                })
                .success(function() {
                    $state.go('root.authorized.personaShow.activateFinishLine');
                })
                .error(function() {
                    
                });
        };

        $scope.purchase = function() {
            $scope.isPersonaPurshased ? $scope.purchaseLine() : $scope.purchasePersona();
        }

        $scope.openAddLineDialog = function() {
            $http.get('/api/v1/phones.json')
                .then(function(resp) {
                    var dialogScope = $scope.$new();
                    dialogScope.phones = resp.data.phones;
                    dialogScope.phone = resp.data.phones[0].real;

                    ngDialog.open({
                        template: '/views/partials/add_line_dialog.html',
                        scope: dialogScope
                    })
                    .closePromise.then(function(data) {
                        $scope.phone = data.value;
                        $scope.totalPayment += $scope.lineCost;
                    });
                });
        };

        $scope.removeLine = function() {
            $scope.totalPayment -= $scope.lineCost;
            delete $scope.phone;
        };

        if(!$scope.isPersonaPurshased) {
            $scope.totalPayment += $scope.personaCost;
        }
    });