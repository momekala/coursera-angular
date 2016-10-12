;(function () {
  'use strict'

  angular.module('MenuApp')
  .constant('ClientAPI', 'https://davids-restaurant.herokuapp.com/categories.json')
  .service('CategoryItemsService', CategoryItemsService)

  CategoryItemsService.$inject = ['$http', 'ClientAPI']
  function CategoryItemsService ($http, ClientAPI) {
    var service = this
    var items = []

    service.getItemsForCategory = function (categoryId) {
      var items = $http({
        method: 'GET',
        url: (ClientAPI + categoryId + '.json'),
        cache: true
      }).then(
        function (response) {
          service.items = response.data
          console.log(response.data);
          return service.items
        })

      return items /* this a promise */
    }
  }
})()
