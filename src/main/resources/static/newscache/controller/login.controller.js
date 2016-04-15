
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
        
        function submit() {
            return SessionService.login(vm.username, vm.password);
                // .then(function (data) {
                //     console.log(data);
                // })
                // .catch(function(error) {
                //     console.log(error);
                // });
        }

    }
}());