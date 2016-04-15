(function() {
    'use strict';

    angular
        .module('newscache.session.service', [
            'ngResource'
        ])
        .factory('SessionService', SessionService);

    SessionService.$inject = ['$resource', '$q', '$location', '$http'];

    function SessionService($resource, $q, $location, $http) {

        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getCurrentUser: getCurrentUser
        };

        function login(username, password) {
            console.log(username + password);
            var headers = {authorization : "Basic " + btoa(username + ":" + password)};
            return $resource('./api/user', {}, {
                execute: {
                    method: 'GET',
                    headers: headers
                }
            }).execute().$promise 
                .then(success)
                .catch(fail);

            function success(data) {
                return data;
            }

            function fail (error) {
                console.log(error + 'In session service');
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
