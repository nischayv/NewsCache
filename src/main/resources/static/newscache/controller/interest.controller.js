/**
 * Created by nischay on 20/02/2016.
 */
(function() {
    'use strict';

    angular
        .module('newscache.controller.interest', [

        ])
        .controller('InterestController', InterestController);

    InterestController.$inject = ['InterestService', '$q', '$scope'];

    function InterestController(InterestService, $q, $scope) {
        var vm = this;

        activate();

        function activate() {

        }

    }
}());