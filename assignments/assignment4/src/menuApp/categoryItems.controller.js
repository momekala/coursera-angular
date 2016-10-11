;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('MenuCategoryItemsController', MenuCategoryItemsController)

  MenuCategoryItemsController.$inject = ['$stateParams', 'list']
  function MenuCategoryItemsController ($stateParams, list) {
    var categoryItem = this
    var category = list.filter((item) => { return item.id == $stateParams.categoryId })

    categoryItem.name = category[0].name
    categoryItem.id = category[0].id
    categoryItem.url = category[0].url
  }
})()
