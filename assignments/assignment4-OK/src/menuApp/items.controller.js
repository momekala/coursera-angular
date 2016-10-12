;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController)

  ItemsController.$inject = ['MenuDataService', '$stateParams', 'list', 'items']
  function ItemsController (MenuDataService, $stateParams, list, items) {
    var categoryItems = this
    categoryItems.items = items
    var category = list.filter((item) => { return item.short_name == $stateParams.categoryShortName })
    console.log(items)
    categoryItems.name = category[0].name
  }
})()
