(function() {
    'use strict';

    angular
        .module('newscache.controller.storyModal', [])
        .controller('StoryModalController', StoryModalController);

    StoryModalController.$inject = ['$uibModalInstance', 'story', 'StoryModalService', '$scope', '$interval', '$stomp'];

    function StoryModalController($storyModal, story, StoryModalService, $scope, $interval, $stomp) {
        var vm = this;
        vm.story = story;
        vm.storyComment = '';
        vm.comments = [];
        vm.username = 'nischayv';
        vm.storyTitle = '';
        vm.commentDto = {storyTitle:'', username:'', storyComment:''};
        vm.closeStory = closeStory;
        vm.save = saveComment;
        activate();
        //retrieve();
        //
        //function retrieve() {
        //    vm.pull = $interval(function () {
        //    activate();
        //    }, 1000);
        //}

        $stomp
            .connect('/newscache/stomp')
            .then(function () {
                $stomp.subscribe('/topic/message', function (payload) {
                   vm.comments = payload;
                   $scope.$apply();
                });
            });



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
                .then(function(data) {
                   vm.comments.push(data);
                   //$scope.compile();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function closeStory() {
            //if (angular.isDefined(vm.pull)) {
            //    $interval.cancel(vm.pull);
            //}
            $storyModal.close('ok');
        }
    }
}());