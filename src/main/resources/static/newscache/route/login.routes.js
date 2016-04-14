(function() {
    'use strict';

    angular
        .module('newscache.route.login', [
            'ngRoute',
            //'newscache.controller.login',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'newscache/template/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            });
    }

}());