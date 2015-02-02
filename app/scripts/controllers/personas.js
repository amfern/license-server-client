'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('PersonasCtrl', function($scope, $stateParams) {
        $scope.personas = {
            work: {
                name: 'Work',
                description: 'Isolate all work related data and apps and secure corporate assets.',
                fullDescription: 'Isolate all work related data and apps and secure corporate assets. Activating work persona will allow you to deploy a customized work environment tailored to your needs, preserve your privacy and protect your employer corporate assets and intellectual properties. The work Persona will be managed by your employer to assure adherence to corporate governance and policies.',
            },
            hidden: {
                name: 'Hidden',
                description: 'Keep your private activities hidden from others.',
                fullDescription: 'Keep your private activities hidden from others. Hidden Persona allow you to create a complete new instance for you mobile device that could not be viewed, inspected and/or visible to others. Beyond data encryption, accessing the hidden Persona requires access code that will only be known to you. You could leverage the hidden Persona for everything personal that you would like to make sure kept personal.',
            },
            wallet: {
                name: 'Wallet',
                description: 'Secure your shopping transactions and financial activities.',
                fullDescription: 'Secure your shopping transactions and financial activities. Wallet Persona provides a safe and secure environment for all of your financial and payment apps. This service ensure that the wallet persona kept malware free by disabling few securing different functionality on your device that may expose you to risk otherwise.'
            },
            dod: {
                name: 'DoD',
                description: 'Military grade secured mobile environment.',
                fullDescription: 'Military grade secured mobile environment. DoD persona is tailored to the required capabilities of military and government related usages. This customized persona removes all the basic functionality that may pose risk and disable device functionality such as regular phone dialer, unencrypted messaging, etc.'
            }
        };

        $scope.personaId = $stateParams.id;
        $scope.persona = $scope.personas[$scope.personaId];
    });