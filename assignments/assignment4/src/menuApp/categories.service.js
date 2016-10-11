;(function () {
  'use strict'

  angular.module('MenuApp')
  .constant('ClientAPI', 'https://davids-restaurant.herokuapp.com/categories.json')
  .service('MenuCategoriesService', MenuCategoriesService)

  MenuCategoriesService.$inject = ['$http', 'ClientAPI']
  function MenuCategoriesService ($http, ClientAPI) {
    var service = this
    var list = []

    service.getCategories = function () {
      var list = $http({
        method: 'GET',
        url: (ClientAPI),
        cache: true
      }).then(
        function (response) {
          service.list = response.data
          return service.list
        })

      return list /* this a promise */
    }
  }
})()
