(function() {
    'use strict';

    angular.module('newscache', [
            'ngRoute',
            'ui.bootstrap',
            'ngMessages',
            'wu.masonry',
            'newscache.config',
            'newscache.service',
            'newscache.controller',
            'newscache.route',
            'newscache.directive',
            'newscache.templates'
        ])
        .config(['$locationProvider', function ($locationProvider) {
        }]);
}());