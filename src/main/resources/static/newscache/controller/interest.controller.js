/**
 * Created by nischay on 20/02/2016.
 */
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
        vm.interest = {image: './img/starwars.jpg'};
        vm.errors = {};
        activate();

        function activate() {
            return loadInterest()
                .then(function () {
                    console.log('Loaded the interest');
                })
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

    }
}());