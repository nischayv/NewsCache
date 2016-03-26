
(function() {
    'use strict';

    angular
        .module('newscache.storyModal.service', [
            'ngResource'
        ])
        .factory('StoryModalService', StoryModalService);

    StoryModalService.$inject = ['$resource', '$q'];

    function StoryModalService($resource, $q, $location) {

        return {
            //loadComments: loadComments,
            saveComment: saveComment
        };

        //function loadComments() {
        //    return $resource('./api/comment/load', {}, {
        //        execute: {
        //            method: 'GET',
        //            isArray: true
        //        }
        //    }).execute().$promise
        //        .then(success)
        //        .catch(fail);
        //
        //    function success(data) {
        //        return data;
        //    }
        //
        //    function fail (error) {
        //        console.log(error);
        //        return $q.reject(error);
        //    }
        //}

        function saveComment(comment) {
            return $resource('./api/comment/save', {}, {
                        execute: {
                            method: 'POST'
                        }
                    }).execute(comment).$promise
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
