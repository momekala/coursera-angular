;(function () {
  'use strict'

  var shoppingList = [
    {
      name: 'Milk',
      quantity: '1l'
    }, {
      name: 'Orange Juice',
      quantity: '1 bottle'
    }, {
      name: 'Cookie Dough',
      quantity: 'A packet'
    }, {
      name: 'Chocolate',
      quantity: '1 tablet'
    }, {
      name: 'Red Wine',
      quantity: '1 bottle'
    }, {
      name: 'Apples',
      quantity: '1k'
    }, {
      name: 'Bread',
      quantity: '1 loaf'
    }
  ]
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
    var itemsBoughtCtrl = this

    itemsBoughtCtrl.getItems = function () {
      return ShoppingListCheckOffService.getBoughtItems()
    }

    itemsBoughtCtrl.isEmpty = function () {
      return itemsBoughtCtrl.getItems().length === 0
    }
  }

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService']
  function ToBuyShoppingController (ShoppingListCheckOffService) {
    var itemsToBuyCtrl = this

    itemsToBuyCtrl.getItems = function () {
      return ShoppingListCheckOffService.getItemsToBuy()
    }

    itemsToBuyCtrl.isEmpty = function () {
      return itemsToBuyCtrl.getItems().length === 0
    }

    itemsToBuyCtrl.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex)
    }
  }

  function ShoppingListCheckOffService () {
    var service = this
    var shoppingListToBuy = shoppingList
    var alreadyBought = []

    service.getItemsToBuy = function () {
      return shoppingListToBuy
    }
    service.buyItem = function (itemIndex) {
      var item = shoppingListToBuy[itemIndex]
      shoppingListToBuy.splice(itemIndex, 1)
      alreadyBought.push(item)
    }
    service.getBoughtItems = function () {
      return alreadyBought
    }
  }
})()
