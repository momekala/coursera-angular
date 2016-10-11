;(function () {
  'use strict'

  angular.module('MenuApp')
  .component('menuCategories', {
    templateUrl: 'menuApp/templates/menuCategories.template.html',
    bindings: {
      list: '<'
    }
  })
})()
