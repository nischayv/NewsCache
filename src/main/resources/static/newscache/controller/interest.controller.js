(function() {
    'use strict';

    angular
        .module('newscache.controller.interest', [
            'newscache.service.interest',
            'newscache.controller.navbar'
        ])
        .controller('InterestController', InterestController);

    InterestController.$inject = ['InterestService', '$q', '$scope', '$routeParams', '$uibModal'];

    function InterestController(InterestService, $q, $scope, $routeParams, $uibModal) {
        var vm = this;
        vm.interestName = $routeParams.param;
        vm.interest = {};
        vm.errors = {};
        vm.storyList = {stories: []};
        vm.isDataLoaded = false;
        vm.storyModal = {};
        vm.popUp = popUp;
        vm.convert = convert;
        activate();

        function activate() {
            return loadInterest()
                .then(function () {
                    console.log('Loaded the interest');
                    return $q.resolve();
                })
                .then(loadStories)
                .catch(function (error) {
                    vm.errors = error;
                });
        }

        function loadInterest() {
            return InterestService.findInterest(vm.interestName)
                .then(function (data) {
                    vm.interest = data;
                    console.log(vm.interest);
                })
                .catch(function(error) {
                    vm.errors = error;
                });
        }

        function convert(str) {
            return str.replace(/\s+/g, '').toLowerCase();
        }

        function loadStories() {
            return InterestService.loadStories(vm.interestName)
                .then(function (data) {
                    vm.storyList.stories = data;
                    console.log(vm.storyList);
                    vm.isDataLoaded = true;
                })
                .catch(function(error) {
                    vm.errors = error;
                });
        }

        function popUp(story) {
            vm.storyModal = $uibModal.open({
               templateUrl: 'newscache/template/storyModal.html',
               controller: 'StoryModalController',
               controllerAs: 'vm',
               windowClass: 'my-dialog',
               resolve: {
                   story: function() {
                       return story;
                   }
               },
               animation: true
            });
        }
    }
}());