(function() {
    'use strict';

    angular
        .module('newscache.controller.navbar', [
            'newscache.service.navbar',
            'newscache.service.session'
        ])
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['NavbarService', '$location', 'SessionService'];

    function NavbarController(NavbarService, $location, SessionService) {
        var vm = this;
        vm.startsWith = startsWith;
        vm.search = findInterest;
        vm.logout = logout;
        // vm.isActive = isActive;
        vm.interest = ''; 
        vm.interestList = [];
        vm.errors = {};
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
        
        function logout() {
            return SessionService.logout()
                .then(function () {
                    vm.interestList = [];
                    return $location.path('/login');
                })
                .catch(function (error) {
                    vm.errors = error;
                });
        }

        function startsWith (interest, viewValue) {
            return interest.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
        }

        function findInterest () {
            return NavbarService.findInterest(vm.interest)
                .then(function(data) {
                    return $location.path('/interest').search({param: data.name});
                })
                .catch(function(error) {
                    vm.errors = error;
                });
        }
    }
}());