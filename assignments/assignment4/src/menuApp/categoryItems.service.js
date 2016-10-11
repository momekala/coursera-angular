;(function () {
  'use strict'

  angular.module('MenuApp')
  .service('CategoryItemsService', CategoryItemsService)

  CategoryItemsService.$inject = ['$http']
  function CategoryItemsService ($http) {
    var service = this
    var items = []

    service.getItemsForCategory = function (categoryId) {
      var items = $http({
        method: 'GET',
        url: (ClientAPI),
        cache: true
      }).then(
        function (response) {
          service.items = response.data
          return service.items
        })

      return items /* this a promise */
    }
  }
})()
