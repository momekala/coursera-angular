;(function () {
  'use strict'

  angular.module('MenuApp')
  .constant('ClientAPI', 'https://davids-restaurant.herokuapp.com/menu_items.json')
  .service('MenuCategoriesService', MenuCategoriesService)

  MenuCategoriesService.$inject = ['$http', 'ClientAPI']
  function MenuCategoriesService ($http, ClientAPI) {
    var service = this
    var categories = []

    service.getCategories = function () {
      var items = $http({
        method: 'GET',
        url: (ClientAPI),
        cache: true
      }).then(
        function (response) {
          service.categories = response.data
          console.log(response.data)
          return response.data
        })
      return categories /* items is a promise */
    }
  }
})()
