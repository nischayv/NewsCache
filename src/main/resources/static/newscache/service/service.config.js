(function() {
    'use strict';

    angular
        .module('newscache.service', [
        'newscache.service.navbar',
        'newscache.service.storyModal',
        'newscache.service.session',
        'newscache.service.login',
        'newscache.service.home',
        'newscache.service.auth',
        'newscache.service.loginModal'
        ]);
}());