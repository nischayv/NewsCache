
(function() {
    'use strict';

    angular
        .module('newscache.service.navbar', [
            'ngResource'
        ])
        .factory('NavbarService', NavbarService);

    NavbarService.$inject = ['$resource', '$q', '$location'];

    function NavbarService($resource, $q, $location) {

        return {
            loadInterests: loadInterests,
            findInterest: findInterest
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
                return data;
            }

            function fail (error) {
                console.log(error);
                return $q.reject(error);
            }
        }

        function findInterest(data) {
            console.log('In service');
            console.log(data);
            return $resource('./api/navbar_search/search/' + data, {}, {
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
                console.log(error);
                return $q.reject(error);
            }
        }
    }
}());