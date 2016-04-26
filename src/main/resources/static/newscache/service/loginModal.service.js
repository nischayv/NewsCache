
(function() {
    'use strict';

    angular
        .module('newscache.service.loginModal', [
            'ngResource'
        ])
        .factory('LoginModalService', LoginModalService);

    LoginModalService.$inject = ['$resource', '$q'];

    function LoginModalService($resource, $q) {

        return {
            saveUser: saveUser
        };

        function saveUser(user) {
            return $resource('./user/register', {}, {
                execute: {
                    method: 'POST'
                }
            }).execute(user).$promise
                .then(success)
                .catch(fail);

            function success(data) {
                return data;
            }

            function fail (error) {
                console.log(error);
                return $q.reject(error);
            }
        }
    }
}());
