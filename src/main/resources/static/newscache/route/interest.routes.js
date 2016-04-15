(function() {
    'use strict';

    angular
        .module('newscache.route.interest', [
            'ngRoute',
            'newscache.controller.interest',
            'newscache.templates'
        ])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) { 
        $routeProvider
            .when('/interest', {
                templateUrl: 'newscache/template/interest.html',
                controller: 'InterestController',
                controllerAs: 'vm'
            });
    }

}());