(function() {
    'use strict';

    angular
        .module('newscache.controller.interest', [
            'newscache.service.interest',
            'newscache.service.session'
        ])
        .controller('InterestController', InterestController);

    InterestController.$inject = ['InterestService', '$q', '$routeParams', '$uibModal', 'SessionService'];

    function InterestController(InterestService, $q, $routeParams, $uibModal, SessionService) {
        var vm = this;
        vm.interestName = $routeParams.param;
        vm.interest = {};
        vm.errors = {};
        vm.storyList = {stories: []};
        vm.isDataLoaded = false;
        vm.storyModal = {};
        vm.user = {};
        vm.subscribe = '';
        vm.subscribeDto = {};
        vm.subscription = subscription;
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
                .then(loadUser)
                .catch(function (error) {
                    vm.errors = error;
                });
        }

        function subscription() {
            vm.subscribeDto.username = vm.user.username;
            vm.subscribeDto.interestName = vm.interestName;
            if(vm.subscribe === 'Follow') {
                return InterestService.follow(vm.subscribeDto)
                    .then(function (data) {
                        vm.subscribe = 'Unfollow';
                        console.log(data);
                    })
                    .catch(function(error) {
                        vm.errors = error;
                    });
            }
            else {
                return InterestService.unfollow(vm.subscribeDto)
                    .then(function (data) {
                        vm.subscribe = 'Follow';
                        console.log(data);
                    })
                    .catch(function(error) {
                        vm.errors = error;
                    });
            }
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

        function loadUser() {
            return SessionService.getCurrentUser()
                .then(function (data) {
                    vm.user = data.principal;
                    console.log(vm.user);
                    for(var i = 0; i < vm.user.interestList.length; i++) {
                        if(vm.user.interestList[i].name === vm.interestName) {
                            vm.subscribe = 'Unfollow';
                            console.log('testUnfollow');
                            return $q.resolve();
                        }
                    }
                    vm.subscribe = 'Follow';
                    console.log('testFollow');
                })
                .catch(function(error) {
                    vm.errors = error;
                    // return $q.reject();
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
                    return $q.resolve();
                })
                .catch(function(error) {
                    vm.errors = error;
                    return $q.reject();
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