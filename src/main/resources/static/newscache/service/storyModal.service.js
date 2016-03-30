
(function() {
    'use strict';

    angular
        .module('newscache.storyModal.service', [
            'ngResource'
        ])
        .factory('StoryModalService', StoryModalService);

    StoryModalService.$inject = ['$resource', '$q'];

    function StoryModalService($resource, $q) {

        return {
            loadComments: loadComments,
            saveComment: saveComment
        };

        function loadComments(storyTitle) {
            return $resource('./api/comment/load/' + storyTitle, {}, {
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

        function saveComment(comment) {
            console.log(comment);
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
