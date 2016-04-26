(function() {
    'use strict';

    angular
        .module('newscache.service.login', [
            'ngResource',
            'newscache.service.session'
        ])
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$resource', '$q', '$location', 'SessionService'];

    function LoginService($resource, $q, $location, SessionService) {

        return {
            login: login
        };

        function login(username, password) {
            return SessionService.login(username, password)
                .then(function () {
                    $location.path('/home');
                })
                .catch(function(error) {
                    console.log('In login service');
                    return $q.reject(error);
                });
        }

    }
}());