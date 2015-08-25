(function() {
    'use strict';

    angular.module('emojify', []);

    angular.module('emojify')
        .filter('emojify', emojifyFilter);

    emojifyFilter.$inject = ['$sce'];

    function emojifyFilter($sce) {
        return function (input) {
            if (!input)
                return "";

            return $sce.trustAsHtml(emojify.replace(input));
        };
    }
}());