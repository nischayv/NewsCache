(function() {
    'use strict';

    angular
        .module('newscache.route.home', [
            'ngRoute',
            'newscache.controller.home',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'newscache/template/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

}());