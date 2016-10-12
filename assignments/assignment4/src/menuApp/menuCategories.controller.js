;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController)

  MenuCategoriesController.$inject = ['MenuCategoriesService', 'list', 'categoryItems']
  function MenuCategoriesController (MenuCategoriesService, list, categoryItems) {
    var categories = this
    categories.list = list
    categories.categoryItems = categoryItems
  }
})()
