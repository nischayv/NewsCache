(function() {
    'use strict';

    angular.module('newscache', [
            'ngRoute',
            'ui.bootstrap',
            'ngMessages',
            'wu.masonry',
            'ngStomp',
            'newscache.config',
            'newscache.service',
            'newscache.controller',
            'newscache.route',
            'newscache.directive',
            'newscache.templates'
        ])
        .config(['$locationProvider', function ($locationProvider) {
        }])
        .run(function($rootScope, $location, SessionService) {
            $rootScope.location = $location;
            $rootScope.$on( "$routeChangeStart", function() {
                if(SessionService.isLoggedIn() !== true){
                    $location.path('/login').search('');
                }
            });
        });
}());