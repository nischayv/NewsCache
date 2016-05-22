(function() {
    'use strict';

    angular
        .module('newscache.service.session', [
            'ngResource'
        ])
        .factory('SessionService', SessionService);

    SessionService.$inject = ['$resource', '$q'];

    function SessionService($resource, $q) {
        var authenticated = false;
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
                authenticated = true;
                return data;
            }

            function fail (error) {
                console.log(error + 'In session service');
                return $q.reject(error);
            }
        }

        function logout() {
            return $resource('./api/logout', {}, {
                execute: {
                    method: 'GET'
                }
            }).execute().$promise 
                .then(success)
                .catch(fail);

            function success(data) {
                authenticated = false;
                return data;
            }

            function fail (error) {
                console.log(error + 'In session service');
                return $q.reject(error);
            }
        }

        function isLoggedIn() {
            return authenticated;
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
                console.log(data);
                return data;
            }

            function fail (error) {
                return $q.reject(error);
            }
        }
    }
}());
