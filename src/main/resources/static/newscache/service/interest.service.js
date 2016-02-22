
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
            //loadInterests: loadInterests
        };

        //function loadInterests() {
        //    return $resource('./api/navbar_search/load', {}, {
        //        execute: {
        //            method: 'GET',
        //            isArray: true
        //        }
        //    }).execute().$promise
        //        .then(success)
        //        .catch(fail);
        //
        //    function success(data) {
        //        console.log(data);
        //        return data;
        //    }
        //
        //    function fail (error) {
        //        console.log(error);
        //        return $q.reject(error);
        //    }
        //}
    }
}());