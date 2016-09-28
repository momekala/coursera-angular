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
      restrict: 'E',
      scope: {
        searchTerm: '@',
        found: '<',
        onRemove: '&'
      },
      templateUrl: 'foundItems.html',
      controller: FoundItemsDirectiveController,
      controllerAs: 'items',
      bindToController: true
    }

    return ddo
  }

  function FoundItemsDirectiveController () {

  }

/**
 * NarrowItDownController
 */
  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController (MenuSearchService) {
    var narrowDownCtrl = this
    var searchTerm = ''
    var menuItems = []

    narrowDownCtrl.searchMenu = function (searchTerm) {
      narrowDownCtrl.searchTerm = searchTerm
      if (searchTerm.trim() === '') {
        narrowDownCtrl.menuItems = []
      }
      else {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm)
        promise.then(function (response) {
          narrowDownCtrl.menuItems = response
        }).catch(function (error) {
          console.log(error)
        })
      }
    }

    narrowDownCtrl.getItems = function () {
      return narrowDownCtrl.menuItems
    }

    narrowDownCtrl.removeItem = function (index) {
      narrowDownCtrl.menuItems.splice(index, 1)
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
      var lcTerm = $filter('lowercase')(term) /* lowercase search term & haystacks */
      
      for (var i = 0; i < items.length; i++) {
        var itemName = $filter('lowercase')(items[i].name)
        var itemDescription = $filter('lowercase')(items[i].description)

        if (itemName.includes(lcTerm) || itemDescription.includes(lcTerm)) {
          filteredMenuItems.push(items[i])
        }
      }
      return filteredMenuItems
    }
  }

})()
