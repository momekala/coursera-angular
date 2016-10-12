;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController)

  CategoryItemsController.$inject = ['$stateParams', 'list']
  function CategoryItemsController ($stateParams, list) {
    var categoryItems = this
    var category = list.filter((item) => { return item.id == $stateParams.categoryId })

    categoryItems.name = category[0].name
    categoryItems.id = category[0].id
    categoryItems.url = category[0].url
  }
})()
