;(function () {
  'use strict'

  angular.module('MenuApp')
  .controller('MenuDataController', MenuDataController)

  MenuDataController.$inject = ['MenuDataService', 'list']
  function MenuDataController (MenuDataService, list) {
    var categories = this
    categories.list = list
  }
})()
