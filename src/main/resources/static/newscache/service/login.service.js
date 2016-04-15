(function() {
    'use strict';

    angular
        .module('newscache.login.service', [
            'ngResource'
        ])
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$resource', '$q', '$location'];

    function LoginService($resource, $q, $location) {

        return {
            
        };


    }
}());