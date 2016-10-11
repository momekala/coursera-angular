;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController)

  MenuCategoriesController.$inject = ['MenuCategoriesService', 'categories']
  function MenuCategoriesController (MenuCategoriesService, categories) {
    var menuCategories = this
    menuCategories.categories = categories
})()
