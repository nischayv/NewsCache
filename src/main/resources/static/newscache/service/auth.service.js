(function() {
    'use strict';

    angular
        .module('newscache.service.auth', [
            'ngResource',
            'newscache.service.session'
        ])
        .factory('AuthService', AuthService);

    AuthService.$inject = ['SessionService', '$location', '$rootScope'];

    function AuthService(SessionService, $location, $rootScope) {

        return {
            initialize: initialize
        };
    
        function initialize() {
            $rootScope.location = $location;
            $rootScope.$on( "$routeChangeStart", function() {
                if(SessionService.isLoggedIn() !== true){
                    $location.path('/login').search('');
                }
            });
        }
    }
}());