(function() {
    'use strict';

    angular
        .module('newscache.route.home', [
            'ngRoute',
            'newscache.controller.home',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider', '$httpProvider'];

    function config($routeProvider, $httpProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'newscache/template/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }

}());