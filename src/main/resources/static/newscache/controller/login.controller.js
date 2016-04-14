
(function() {
    'use strict';

    angular
        .module('newscache.controller.login', [
            'newscache.login.service'
        ])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    function LoginController(LoginService) {
        var vm = this;

    }
}());