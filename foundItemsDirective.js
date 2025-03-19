(function () {
    'use strict';

    angular.module('NarrowItDownApp')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        return {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };
    }
})();

