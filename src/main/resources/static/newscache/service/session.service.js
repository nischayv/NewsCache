(function() {
    'use strict';

    angular
        .module('newscache.session.service', [
            'ngResource'
        ])
        .factory('SessionService', SessionService);

    SessionService.$inject = ['$resource', '$q', '$location'];

    function SessionService($resource, $q, $location) {

        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getCurrentUser: getCurrentUser
        };

        function login(username, password) {
            return $resource('./api/user',  "username=" + username +
                "&password=" + password, {
                execute: {
                    method: 'GET',
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    }
                }
            }).execute().$promise
                .then(success)
                .catch(fail);

            function success(data) {
                console.log(data);
                return data;
            }

            function fail (error) {
                console.log(error);
                return $q.reject(error);
            }
        }

        function logout() {

        }

        function isLoggedIn() {

        }

        function getCurrentUser() {

        }


    }
}());
