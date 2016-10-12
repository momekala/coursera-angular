;(function () {
  'use strict'

  angular.module('Data')
  .controller('MenuDataController', MenuDataController)

  MenuDataController.$inject = ['$stateParams', 'MenuDataService', 'list']
  function MenuDataController ($stateParams, MenuDataService, list) {
    var categories = this
    categories.list = list

    console.log(list)
    console.log($stateParams.categoryId)

    var category = list.filter((item) => { return item.id == $stateParams.categoryId })

    // categories.items.name = category[0].name
    // categories.items.id = category[0].id
    // categories.items.url = category[0].url
  }
})()
