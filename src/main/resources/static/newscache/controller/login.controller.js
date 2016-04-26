
(function() {
    'use strict';

    angular
        .module('newscache.controller.login', [
            'newscache.service.login',
            'newscache.service.session'
        ])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService', 'SessionService', '$uibModal'];

    function LoginController(LoginService, SessionService, $uibModal) {
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.loginModal = {};
        vm.loginPopUp = loginPopUp;
        vm.submit = submit;
        activate();
        
        function submit() {
            return LoginService.login(vm.username, vm.password)
                .catch(function(error) {
                    //TODO nischayv Handle error in the html
                    console.log(error); 
                });
        }

        function activate() {
            console.log(SessionService.isLoggedIn());
        }

        function loginPopUp() {
            vm.loginModal = $uibModal.open({
                templateUrl: 'newscache/template/loginModal.html',
                controller: 'LoginModalController',
                controllerAs: 'vm',
                animation: true
            });
        }
    }
}());