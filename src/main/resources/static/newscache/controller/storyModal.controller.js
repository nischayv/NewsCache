(function() {
    'use strict';

    angular
        .module('newscache.controller.storyModal', [])
        .controller('StoryModalController', StoryModalController);

    StoryModalController.$inject = ['$uibModalInstance', 'story', 'StoryModalService', '$scope'];

    function StoryModalController($storyModal, story, StoryModalService, $scope) {
        var vm = this;
        vm.story = story;
        vm.comment = {};
        vm.storyComment = '';
        vm.comments = [];
        vm.username = 'nischayv';
        vm.storyTitle = '';
        vm.commentDto = {storyTitle:'', username:'', storyComment:''};
        vm.closeStory = closeStory;
        vm.save = saveComment;
        activate();

        function activate() {
            return loadComments()
                .then(function() {
                    console.log('loaded the comments');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        $scope.$watch('vm.comment', function() {
           vm.comments.push(vm.comment);
        });

        function loadComments() {
            return StoryModalService.loadComments(vm.story.title)
                .then(function(data) {
                    vm.comments = data;
                    console.log(vm.comments);
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
                .then(function(data) {
                   vm.comment = data;
                   console.log(data);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function closeStory() {
            $storyModal.close('ok');
        }
    }
}());