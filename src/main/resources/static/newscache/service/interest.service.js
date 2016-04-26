
(function() {
    'use strict';

    angular
        .module('newscache.service.interest', [
            'ngResource'
        ])
        .factory('InterestService', InterestService);

    InterestService.$inject = ['$resource', '$q'];

    function InterestService($resource, $q) {

        return {
            findInterest: findInterest,
            loadStories: getStories,
            follow: follow,
            unfollow: unfollow
        };

        function findInterest(data) {
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

        function getStories(data) {
            return $resource('./api/interest/load/' + data, {}, {
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

        function follow(subscribeDto) {
            return $resource('./api/interest/follow', {}, {
                execute: {
                    method: 'POST'
                }
            }).execute(subscribeDto).$promise
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

        function unfollow(subscribeDto) {
            return $resource('./api/interest/unfollow', {}, {
                execute: {
                    method: 'POST'
                }
            }).execute(subscribeDto).$promise
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