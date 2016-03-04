(function() {
    'use strict';

    angular
        .module('newscache.controller.interest', [
            'newscache.service.interest'
        ])
        .controller('InterestController', InterestController);

    InterestController.$inject = ['InterestService', '$q', '$scope', '$routeParams'];

    function InterestController(InterestService, $q, $scope, $routeParams) {
        var vm = this;
        vm.interestName = $routeParams.param;
        vm.interest = {};
        vm.errors = {};
        vm.stories = [];
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
                    console.log(data);
                })
                .catch(function(error) {
                    vm.errors = error;
                });
        }

    }
}());