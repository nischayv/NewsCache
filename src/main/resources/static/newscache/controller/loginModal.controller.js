(function() {
    'use strict';

    angular
        .module('newscache.controller.loginModal', [
            'newscache.service.loginModal'
        ])
        .controller('LoginModalController', LoginModalController);

    LoginModalController.$inject = ['$uibModalInstance', 'LoginModalService', '$scope', 'SessionService', '$q'];

    function LoginModalController($loginModal, LoginModalService, $scope, SessionService, $q) {
        var vm = this;
        vm.user = {};
        vm.closeModal = closeModal;
        vm.register = register;

        activate(); 

        function activate() {

        }

        function register() {
            return LoginModalService.saveUser(vm.user)
                .then(function(data) {
                   closeModal();
                   $location.path('/home');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function closeModal() {
            $loginModal.close('ok');
        }
    }
}());