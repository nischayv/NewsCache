(function() {
    'use strict';

    angular
        .module('newscache.session.service', [
            'ngResource'
        ])
        .factory('SessionService', SessionService);

    SessionService.$inject = ['$resource', '$q', '$location', '$cookies'];

    function SessionService($resource, $q, $location, $cookies) {

        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getCurrentUser: getCurrentUser
        };

        function login(username, password) {
            var headers = {authorization : "Basic " + btoa(username + ":" + password)};
            return $resource('./api/login', {}, {
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
            var cookies = $cookies.get('JSESSIONID');
            return angular.isUndefined(cookies);
        }

        function getCurrentUser() {
            return $resource('./api/user', {}, {
                execute: {
                    method: 'GET'
                }
            }).execute().$promise
                .then(success)
                .catch(fail);

            function success(data) {
                return data;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }


    }
}());
