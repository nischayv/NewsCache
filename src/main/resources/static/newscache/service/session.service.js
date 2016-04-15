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
                console.log(data);
                return data;
            }

            function fail (error) {
                console.log(error);
                return $q.reject(error);
            }

            // $http.get('./api/user', {headers : headers}).success(function(data) {
            //     console.log(data);
            // }).error(function(data) {
            //    console.log(data);
            // });
        }

        function logout() {

        }

        function isLoggedIn() {

        }

        function getCurrentUser() {

        }


    }
}());
