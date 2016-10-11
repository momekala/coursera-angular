;(function () {
  'use strict'

  angular.module('MenuApp')
  .component('menuCategories', {
    templateUrl: 'menuApp/templates/categories.template.html',
    bindings: {
      categories: '<'
    }
  })
})()
