(function() {
    'use strict';

    angular
        .module('newscache.service.home', [
            'ngResource'
        ])
        .factory('HomeService', HomeService);

    HomeService.$inject = ['$resource', '$q', '$location'];

    function HomeService($resource, $q, $location) {

        return {

        };


    }
}());