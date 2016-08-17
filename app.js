"use strict";
(function () {
    angular.module("demo", ["ui.openseadragon"])
    .controller("demo", ["$scope", function ($scope) {
        $scope.options = {
            prefixUrl: "dubai/dubai_uae_files/",
            tileSources: [
                "dubai/dubai_uae.dzi"
            ]
        };
    }]);
})();