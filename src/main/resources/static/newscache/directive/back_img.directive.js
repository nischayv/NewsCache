(function() {
    'use strict';

    angular
        .module('newscache.directive.back_img', [
            'newscache.controller.interest',
            'newscache.service.interest',
            'newscache.templates'
        ])
        .directive('backImgDirective', BackImgDirective);

    BackImgDirective.$inject = ['$timeout'];

    function BackImgDirective($timeout) {
        return {
            restrict: 'AE',
            scope: {
                url: '='
            },
            link: function(scope, elem) {
                $timeout(function() {
                    elem.css('background-image', "url('" + scope.url +"')");
                }, 0);
            }
        };
    }
}());