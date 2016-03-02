(function() {
    'use strict';

    angular
        .module('newscache.directive.back_img', [
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
                    elem.css('background-image', "url('./img/" + scope.url +".jpg')");
                }, 0);
            }
        };
    }
}());