;(function () {
  'use strict'

  angular.module('MenuApp')
  .constant('ClientAPI', 'https://davids-restaurant.herokuapp.com/')
  .service('MenuCategoriesService', MenuCategoriesService)

  MenuCategoriesService.$inject = ['$http', 'ClientAPI', 'categoryId']
  function MenuCategoriesService ($http, ClientAPI, categoryId) {
    var service = this
    var list = []
    var items = []

    service.getCategories = function () {
      var list = $http({
        method: 'GET',
        url: (ClientAPI + 'categories.json'),
        cache: true
      }).then(
        function (response) {
          service.list = response.data
          return response.data
        })

      return list /* this a promise */
    }

    service.getItemsForCategory = function (categoryId) {
      var items = $http({
        method: 'GET',
        url: (ClientAPI + categoryId + '.json'),
        cache: true
      }).then(
        function (response) {
          service.items = response.data
          return response.data

      return items /* this a promise */
    }
  }
})()
