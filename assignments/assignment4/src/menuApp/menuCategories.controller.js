;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController)

  MenuCategoriesController.$inject = ['MenuCategoriesService', 'list']
  function MenuCategoriesController (MenuCategoriesService, list) {
    var categories = this
    categories.list = list
  }
})()
