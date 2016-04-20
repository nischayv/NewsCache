(function() {
    'use strict';

    angular
        .module('newscache.controller.navbar', [

        ])
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['NavbarService', '$q', '$scope', '$location'];

    function NavbarController(NavbarService, $q, $scope, $location) {
        var vm = this;
        vm.startsWith = startsWith;
        vm.search = findInterest;
        vm.interest = '';
        vm.interestList = [];
        vm.errors = {};
        vm.visible = true;
        activate();

        function activate() {
            if(!loginPath()) {
                return loadAllInterests()
                    .then(function() {
                        console.log('Loaded the interests');
                    })
                    .catch(function() {
                        console.log('Error loading interests');
                    });
            }
        }

        function loadAllInterests() {
            return NavbarService.loadInterests()
                .then(function (data) {
                    vm.interestList = data;
                })
                .catch(function (error) {
                    vm.errors = error;
                });
        }

        $scope.$watch( '$location.path()', function() {
            if(loginPath()) {
                vm.visible = false;
            }
            else {
                vm.visible = true;
            }
        });

        function loginPath() {
            if(angular.equals($location.path() , '/login')) {
                return true;
            }
            else {
                return false;
            }
        }

        function startsWith (interest, viewValue) {
            return interest.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
        }

        function findInterest () {
            return NavbarService.findInterest(vm.interest)
                .catch(function(error) {
                    vm.errors = error;
                });
        }
    }
}());