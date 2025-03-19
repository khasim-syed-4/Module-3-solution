(function () {
    'use strict';

    angular.module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchService);

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
                .then(function (response) {
                    var allItems = [];
                    
                    // Extract all menu items from categories
                    angular.forEach(response.data, function (category) {
                        allItems = allItems.concat(category.menu_items);
                    });

                    // Filter items based on searchTerm
                    var foundItems = allItems.filter(item =>
                        item.description.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                    return foundItems;
                });
        };
    }
})();

