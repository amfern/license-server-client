'use strict';

/**
 * @ngdoc function
 * @name personaMarketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personaMarketApp
 */
angular.module('personaMarketApp')
    .controller('MainCtrl', function($scope, $auth, $state, $http, ngDialog) {
        $scope.personas = {
            work: {
                name: 'Work',
                title: 'Work persona',
                description: 'Isolate all work related data and apps and secure corporate assets.',
                fullDescription: 'Isolate all work related data and apps and secure corporate assets. Activating work persona will allow you to deploy a customized work environment tailored to your needs, preserve your privacy and protect your employer corporate assets and intellectual properties. The work Persona will be managed by your employer to assure adherence to corporate governance and policies.',
                imgSrc: '/images/work_persona.png'
            },
            hidden: {
                name: 'Hidden',
                title: 'Hidden persona',
                description: 'Keep your private activities hidden from others.',
                fullDescription: 'Keep your private activities hidden from others. Hidden Persona allow you to create a complete new instance for you mobile device that could not be viewed, inspected and/or visible to others. Beyond data encryption, accessing the hidden Persona requires access code that will only be known to you. You could leverage the hidden Persona for everything personal that you would like to make sure kept personal.',
                imgSrc: '/images/hidden_persona.png'
            },
            wallet: {
                name: 'Wallet',
                title: 'Wallet persona',
                description: 'Secure your shopping transactions and financial activities.',
                fullDescription: 'Secure your shopping transactions and financial activities. Wallet Persona provides a safe and secure environment for all of your financial and payment apps. This service ensure that the wallet persona kept malware free by disabling few securing different functionality on your device that may expose you to risk otherwise.',
                imgSrc: '/images/wallet_persona.png'
            },
            dod: {
                name: 'DoD',
                title: 'DoD persona',
                description: 'Military grade secured mobile environment.',
                fullDescription: 'Military grade secured mobile environment. DoD persona is tailored to the required capabilities of military and government related usages. This customized persona removes all the basic functionality that may pose risk and disable device functionality such as regular phone dialer, unencrypted messaging, etc.',
                imgSrc: '/images/dod_persona.png'
            }
        };

        $scope.currentUser = $auth.user;

        $scope.signOut = function() {
            $auth.signOut()
                .then(function() {
                    $state.go('root.unauthorized.sessionNew');
                });
        };

        // $scope.addLine = function(persona) {
            /*jshint camelcase: false */

            ////////// change it to modal
            // $http.put('/api/v1/users/user/licenses/' + persona.id, {license: { add_line: true }})
            //     .then(function(resp) {
            //         angular.extend(persona, resp.data.license);
            //     });
        // };

        $scope.openReadMore = function(persona) {
            $scope.openReadMoreDialog(persona.imgSrc, persona.title, persona.fullDescription);
        };

        $scope.openReadMoreDialog = function(imgSrc, title, text) {
            var dialogScope = $scope.$new();

            dialogScope.imgSrc = imgSrc;
            dialogScope.title = title;
            dialogScope.text = text;


            ngDialog.open({
                template: '/views/partials/read_more_dialog.html',
                scope: dialogScope
            });
        };
    });