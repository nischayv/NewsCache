(function() {
    'use strict';

    angular
        .module('newscache.controller.loginModal', [
            'newscache.service.loginModal'
        ])
        .controller('LoginModalController', LoginModalController);

    LoginModalController.$inject = ['$uibModalInstance', 'LoginModalService', 'SessionService', '$q', '$location', '$scope'];

    function LoginModalController($loginModal, LoginModalService, SessionService, $q, $location, $scope) {
        var vm = this;
        vm.user = {};
        vm.successPrompt = {};
        vm.closeModal = closeModal;
        vm.register = register;
        vm.close = close;
        activate(); 

        function activate() {

        }

        function register() {
            return LoginModalService.saveUser(vm.user)
                .then(function() {
                    closeModal(); 
                    return SessionService.login(vm.user.username, vm.user.password)
                        .then(function () {
                            $location.path('/home');
                        })
                        .catch(function(error) {
                            console.log('In login service');
                            return $q.reject(error);
                        });
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