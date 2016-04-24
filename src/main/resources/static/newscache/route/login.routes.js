(function() {
    'use strict';

    angular
        .module('newscache.route.login', [
            'ngRoute',
            'newscache.controller.login',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider', '$httpProvider', '$cookiesProvider'];

    function config($routeProvider, $httpProvider, $cookiesProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'newscache/template/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
            .otherwise('login');
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }

}());