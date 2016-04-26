(function() {
    'use strict';

    angular
        .module('newscache.controller.storyModal', [
            'newscache.service.storyModal',
            'newscache.service.session'
        ])
        .controller('StoryModalController', StoryModalController);

    StoryModalController.$inject = ['$uibModalInstance', 'story', 'StoryModalService', '$scope', '$stomp', 'SessionService', '$q'];

    function StoryModalController($storyModal, story, StoryModalService, $scope, $stomp, SessionService, $q) {
        var vm = this;
        vm.story = story;
        vm.storyComment = '';
        vm.comments = [];
        vm.user = {};
        vm.username = '';
        vm.storyTitle = '';
        vm.commentDto = {storyTitle:'', username:'', storyComment:''};
        vm.closeStory = closeStory;
        vm.save = saveComment;
        activate();

        $stomp
            .connect('/newscache/stomp')
            .then(function () {
                $stomp.subscribe('/out/message', function (payload) {
                   vm.comments.push(payload);
                   $scope.$apply();
                });
            });

        function activate() {
            console.log(vm.user);
            return loadComments()
                .then(function() {
                    console.log('loaded the comments');
                    return $q.resolve();
                })
                .then(function() {
                    return SessionService.getCurrentUser()
                        .then(function(data) {
                            vm.user = data;
                            vm.username = vm.user.principal.username;
                            console.log('vm.user', vm.username);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function loadComments() {
            return StoryModalService.loadComments(vm.story.title)
                .then(function(data) {
                    vm.comments = data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function saveComment() {
            vm.commentDto.storyTitle = vm.story.title;
            vm.commentDto.storyComment = vm.storyComment;
            vm.commentDto.username =  vm.username;
            return StoryModalService.saveComment(vm.commentDto)
                .catch(function(error) {
                    console.log(error);
                });
        }

        function closeStory() {
            $storyModal.close('ok');
        }
    }
}());