(function() {
    'use strict';

    angular
        .module('newscache.controller.home', [
            'newscache.home.service',
            'newscache.session.service'
        ])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['HomeService', 'SessionService'];

    function HomeController(HomeService, SessionService) {
        var vm = this;
        vm.activate = activate;
        activate();

        function activate() {
            console.log(SessionService.isLoggedIn());
        }

    }
}());