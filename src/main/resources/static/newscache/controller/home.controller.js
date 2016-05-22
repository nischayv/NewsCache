(function() {
    'use strict';

    angular
        .module('newscache.controller.home', [
            'newscache.service.home',
            'newscache.service.session'
        ])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeService', 'SessionService', '$q', '$location'];

    function HomeController(HomeService, SessionService, $q, $location) {
        var vm = this;
        vm.user = {};
        vm.interestList = {};
        vm.toInterestPage = toInterestPage;
        vm.url = url;
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

        function toInterestPage(interestName) {
            $location.path('/interest').search({param: interestName});
        }

        function url(url) {
            return 'url('+url+')';
        }
    }
}());