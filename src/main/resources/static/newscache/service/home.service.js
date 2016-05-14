(function() {
    'use strict';

    angular
        .module('newscache.service.home', [
            'ngResource'
        ])
        .factory('HomeService', HomeService);

    HomeService.$inject = ['$resource', '$q'];

    function HomeService($resource, $q) {

        return {
            loadPics: loadPics
        };

        function loadPics(username) {
            return $resource('./api/interest/getPics/' + username, {}, {
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