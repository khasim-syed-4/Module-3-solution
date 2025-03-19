(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.searchTerm = "";
        narrow.found = [];

        narrow.narrowItDown = function () {
            if (narrow.searchTerm.trim() === "") {
                narrow.found = [];
                console.log("No search term entered.");
                return;
            }

            MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
                .then(function (result) {
                    narrow.found = result;
                    console.log("Search results:", result);
                })
                .catch(function (error) {
                    console.error("Error fetching menu items:", error);
                });
        };

        narrow.removeItem = function (index) {
            narrow.found.splice(index, 1);
        };
    }
})();
