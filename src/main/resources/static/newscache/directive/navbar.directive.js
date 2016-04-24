(function() {
    'use strict';

    angular
        .module('newscache.directive.navbar', [
            'newscache.controller.navbar',
            'newscache.templates'
        ])
        .directive('navbarDirective', NavbarDirective);

    NavbarDirective.$inject = ['$location'];

    function NavbarDirective($location) {
        return {
            restrict: 'AE',
            templateUrl:  'newscache/template/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'vm'
        };
    }
}());