;(function () {
  'use strict'

  angular.module('Data')
  .controller('MenuDataController', MenuDataController)

  MenuDataController.$inject = ['MenuDataService', 'list']
  function MenuDataController (MenuDataService, list) {
    var categories = this
    categories.list = list
  }
})()
