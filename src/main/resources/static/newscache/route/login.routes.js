(function() {
    'use strict';

    angular
        .module('newscache.route.login', [
            'ngRoute',
            'newscache.controller.login',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider', '$httpProvider'];

    function config($routeProvider, $httpProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'newscache/template/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }

}());