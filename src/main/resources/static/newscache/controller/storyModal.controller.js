(function() {
    'use strict';

    angular
        .module('newscache.controller.storyModal', [])
        .controller('StoryModalController', StoryModalController);

    StoryModalController.$inject = ['$uibModalInstance', 'story', 'StoryModalService'];

    function StoryModalController($storyModal, story, StoryModalService) {
        var vm = this;
        vm.story = story;
        vm.comment = { id: 101, comment: '', user: {id: 101, firstName: 'Nischay', lastName: 'Venkatram', email: 'testEmail', username: 'nischayv', password: 'password', comments: []},  story: {}};
        vm.storyComment = '';
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

        function loadComments() {
            return StoryModalService.loadComments(vm.story.title)
                .then(function(data) {
                    console.log('In controller');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function saveComment() {
            vm.comment.comment = vm.storyComment;
            vm.comment.story = vm.story;
            return StoryModalService.saveComment(vm.comment)
                .then(function(data) {
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