(function() {
    'use strict';

    angular
        .module('newscache.controller.storyModal', [])
        .controller('StoryModalController', StoryModalController);

    StoryModalController.$inject = ['$storyModal', 'story'];

    function StoryModalController($storyModal, story) {
        var vm = this;
        vm.story = story;
        vm.closeStory = closeStory;

        function closeStory() {
            $storyModal.close('ok');
        }
    }
}());