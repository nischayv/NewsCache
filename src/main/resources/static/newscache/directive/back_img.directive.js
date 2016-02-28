(function() {
    'use strict';

    angular
        .module('newscache.directive.back_img', [
        ])
        .directive('backImgDirective', BackImgDirective);

    function BackImgDirective() {
        return {
            restrict: 'AE',
            scope: {
                url: '='
            },
            link: function(scope, elem) {
                elem.css('background-image', url(scope.url));
            }
        };
    }
}());