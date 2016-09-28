;(function () {
  'use strict'

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .filter('menuItems', MenuItemsFilter)

  /**
   * [FoundItemsDirective description]
   */
  function FoundItemsDirective () {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        restrict: 'E',
        searchTerm: '@',
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItems',
      bindToController: true
    }

    return ddo
  }

  function FoundItemsDirectiveController () {
    var foundItemsCtrl = this
  }

/**
 * NarrowItDownController
 */
  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController (MenuSearchService) {
    var foundItems = this
    foundItems.found = []
    foundItems.searchTerm = ''

    foundItems.searchMenu = function (searchTerm) {
      foundItems.searchTerm = searchTerm
      if (searchTerm.trim() === '') {
        foundItems.found = []
      }
      else {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm)
        promise.then(function (response) {
          foundItems.found = response
          console.log(foundItems.found)
        }).catch(function (error) {
          console.log(error)
        })
      }
    }

    foundItems.onRemove = function (index) {
      foundItems.found.splice(index, 1)
    }
  }

/**
 * MenuSearchService
 */
  MenuSearchService.$inject = ['$http', 'menuItemsFilter']
  function MenuSearchService ($http, menuItemsFilter) {
    var service = this

    service.getMatchedMenuItems = function (searchTerm) {
      var items = $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(
        function (response) {
          return menuItemsFilter(response.data.menu_items, searchTerm)
        })
      return items
    }
  }

/**
 * MenuItemsFilter
 */
  MenuItemsFilter.$inject = ['$filter']
  function MenuItemsFilter ($filter) {
    return function (items, term) {
      var filteredMenuItems = []
      for (var i = 0; i < items.length; i++) {
        var itemName = $filter('lowercase')(items[i].name)
        var itemDescription = $filter('lowercase')(items[i].description)

        if (itemName.includes(term) || itemDescription.includes(term)) {
          filteredMenuItems.push(items[i])
        }
      }
      return filteredMenuItems
    }
  }
}

)()
