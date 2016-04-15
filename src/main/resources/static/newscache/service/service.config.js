(function() {
    'use strict';

    angular
        .module('newscache.service', [
        'newscache.navbar.service',
        'newscache.storyModal.service',
        'newscache.session.service',
        'newscache.login.service'
        ]);
}());