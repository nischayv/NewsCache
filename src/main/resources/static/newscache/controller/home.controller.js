(function() {
    'use strict';

    angular
        .module('newscache.controller.home', [
            'newscache.service.home',
            'newscache.service.session'
        ])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeService', 'SessionService', '$q', '$animate'];

    function HomeController(HomeService, SessionService, $q, $animate) {
        var vm = this;
        vm.user = {};
        vm.interestList = {};
        vm.mouseover = false;
        vm.activate = activate;
        activate();

        function activate() {
            return SessionService.getCurrentUser()
                .then(function (data) {
                    vm.user = data.principal;
                    $q.resolve();
                })
                .then(function() {
                    return HomeService.loadPics(vm.user.username)
                        .then(function(data) {
                            vm.interestList = data.interestDtoList;
                            console.log(vm.interestList);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
}());