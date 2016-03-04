
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
            saveStories: saveStories
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
            return $resource('http://www.faroo.com/api?q=' + data +
                '&start=1&length=10&l=en&src=news&i=false&f=json' +
                '&key=AjFzRJttLvOXBpb3BLsR@Qq-yp8_', {}, {
                execute: {
                    method: 'GET'
                    //isArray: true
                }
            }).execute().$promise
                .then(success)
                .catch(fail);

            function success(data) {
                //console.log(data);
                return data;
            }

            function fail (error) {
                console.log(error);
                return $q.reject(error);
            }
        }

        function saveStories(data) {
            return $resource('', {}, {
                execute: {
                    method: 'GET',
                    isArray: true
                }
            }).execute(data).$promise
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