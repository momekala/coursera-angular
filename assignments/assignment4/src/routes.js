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
      controller: 'MenuCategoriesController as categories',
      resolve: {
        list: ['MenuCategoriesService', function (MenuCategoriesService) {
          return MenuCategoriesService.getCategories()
        }]
      }
    })

    // Category Items View
    .state('categories.items', {
      url: '/categories/{categoryId}',
      templateUrl: 'menuApp/templates/categoryItems.template.html',
      controller: 'MenuCategoryItemsController as categoryItem',
      resolve: {
        items: ['MenuCategoryItemsService', 'categoryId', function (MenuCategoryItemsService, categoryId) {
          return MenuCategoryItemsService.getItemsForCategory(categoryId)
        }]
      }
    })
  }
})()
