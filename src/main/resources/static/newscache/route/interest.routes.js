(function() {
    'use strict';

    angular
        .module('newscache.route.interest', [
            'ngRoute',
            'newscache.controller.interest',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider', '$httpProvider'];

    function config($routeProvider, $httpProvider) { 
        $routeProvider
            .when('/interest', {
                templateUrl: 'newscache/template/interest.html',
                controller: 'InterestController',
                controllerAs: 'vm'
            });
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }

}());