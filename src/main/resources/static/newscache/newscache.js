(function() {
    'use strict';

    angular.module('newscache', [
            'ngRoute',
            'ui.bootstrap',
            'ngMessages',
            'wu.masonry',
            'ngStomp',
            // 'ngAnimate',
            'newscache.config',
            'newscache.service',
            'newscache.controller',
            'newscache.route',
            'newscache.directive',
            'newscache.templates'
        ])
        .config(['$locationProvider', function ($locationProvider) {
        }])
        .run(runBlock);

    runBlock.$inject = ['AuthService'];

    function runBlock(AuthService) {
        AuthService.initialize();
    } 
}());