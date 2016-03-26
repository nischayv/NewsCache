(function() {
    'use strict';

    angular
        .module('newscache.controller.storyModal', [])
        .controller('StoryModalController', StoryModalController);

    StoryModalController.$inject = ['$uibModalInstance', 'story'];

    function StoryModalController($storyModal, story) {
        var vm = this;
        vm.story = story;
        vm.closeStory = closeStory;
        activate();

        function activate() {
            return loadComments()
                .then(function() {

                })
                .catch(function() {

                });
        }

        function loadComments() {

        }

        function closeStory() {
            $storyModal.close('ok');
        }
    }
}());