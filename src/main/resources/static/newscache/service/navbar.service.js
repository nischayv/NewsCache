
(function() {
    'use strict';

    angular
        .module('newscache.navbar.service', [
            'ngResource'
        ])
        .factory('NavbarService', NavbarService);

    NavbarService.$inject = ['$resource', '$q'];

    function NavbarService($resource, $q) {

        return {
            loadInterests: loadInterests
        };

        function loadInterests() {
            return $resource('./api/navbar_search/load', {}, {
                execute: {
                    method: 'GET',
                    isArray: true
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
    }
}());