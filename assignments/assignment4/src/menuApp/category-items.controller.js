;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController)

  CategoryItemsController.$inject = ['$stateParams']
  function CategoryItemsController ($stateParams) {
    var categoryItems = this
    // var item = items[$stateParams.itemId]
    // itemDetail.name = item.name
    // itemDetail.description = item.description
  }
})()
