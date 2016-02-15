(function() {
    'use strict';

    angular
        .module('newscache.controller.navbar', [

        ])
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['NavbarService', '$q', '$scope'];

    function NavbarController(NavbarService, $q, $scope) {
        var vm = this;
        vm.startsWith = startsWith;
      //  vm.search = findInterest;
        vm.interest = '';
        vm.interestList = [];
        activate();

        function activate() {
            return loadAllInterests()
                .then(function() {
                    console.log('Loaded the interests');
                })
                .catch(function() {
                    console.log('Error loading interests');
                });
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

        function startsWith (interest, viewValue) {
            return interest.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
        }
    }
}());