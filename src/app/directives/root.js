'use strict;'

angular.module('pingpongscorecard.root', [])
    .config(function($stateProvider) {

        $stateProvider.state('root', {
            abstract: true,
            views: {
                '@': {
                    templateUrl: 'app/partials/layout.html',
                    controller: 'layoutController'
                },
                'navbar@root': {
                    templateUrl: 'app/partials/navbar.html',
                    controller: 'navbarController',
                    controllerAs: 'navbar'
                },
                'main@root': {template: '<ui-view></ui-view>'}
            }
        })
    })
    .controller('layoutController', layoutController)
    .controller('navbarController', navbarController);

function layoutController($rootScope, $state) {

}

function navbarController($rootScope, $scope) {


}