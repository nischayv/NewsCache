
(function() {
    'use strict';

    angular
        .module('newscache.controller.login', [
            'newscache.login.service',
            'newscache.session.service'
        ])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService', 'SessionService'];

    function LoginController(LoginService, SessionService) {
        var vm = this;
        vm.username = '';
        vm.password = '';
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
            return SessionService.isLoggedIn()
                .then(function (data){
                    console.log(data);
                })
                .catch(function(error) {
                    //TODO nischayv Handle error in the html
                    console.log(error);
                });
        }

    }
}());