;(function () {
  'use strict'

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)

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
      bindToController: true,
      link: FoundItemsDirectiveLink,
      transclude: true
    }

    return ddo
  }

  function FoundItemsDirectiveLink (scope, element, attrs, controller) {
    var foundItemsList = this
  }
  function FoundItemsDirectiveController () {
    var foundItemsCtrl = this

    var listTitle = function () { }
  }

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController (MenuSearchService) {
    var itemsBoughtCtrl = this
    var found = []
    var searchTerm = ''

    itemsBoughtCtrl.searchMenu = function (searchTerm) {
      if (itemsBoughtCtrl.searchTerm === '') {

      }
      MenuCategoriesService.getMatchedMenuItems(itemsBoughtCtrl.searchTerm)
    }

    itemsBoughtCtrl.narrowDown = function (index) {
      itemsBoughtCtrl.found.splice(index, 1)
    }
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService ($http) {
    var service = this

    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      })
      return response
    }
  }
})()
