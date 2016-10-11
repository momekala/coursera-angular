;(function () {
  'use strict'

  angular.module('MenuApp').config(RoutesConfig)

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig ($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/')

    // *** Set up UI states ***
    $stateProvider

    // Home View
    .state('home', {
      url: '/',
      templateUrl: 'menuApp/templates/home.template.html'
    })

    // Categories View
    .state('categories', {
      url: '/categories',
      templateUrl: 'menuApp/templates/categories.template.html',
      controller: 'MenuCategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuCategoriesService', function (MenuCategoriesService) {
          return MenuCategoriesService.getCategories()
        }]
      }
    })

    // Category Items View
    .state('categories.items', {
      url: '/categories/{categoryName}',
      templateUrl: 'menuApp/templates/category-items.template.html',
      controller: 'MenuCategoryItemsController as categoryItemsCtrl'
    })
  }
})()
