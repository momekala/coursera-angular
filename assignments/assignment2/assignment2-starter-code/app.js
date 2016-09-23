;(function () {
  'use strict'

  angular.module('ShoppingListCheckOff', [])
  .controller('CheckTooMuchController', CheckTooMuchController)

  CheckTooMuchController.$inject = ['$scope']

  function CheckTooMuchController ($scope) {
    $scope.placeholder = 'List comma separated dishes you usually have for lunch'
    $scope.lunch = ''
    $scope.success = 'Enjoy!'
    $scope.error = 'Too much!'
    $scope.warning = 'Please enter data first'
    $scope.spec = 'Empty list items do NOT count as lunch items'

    $scope.checkList = function () {
      if ($scope.lunch.length === 0) {
        $scope.message = $scope.warning
      } else {
        var lunchList = $scope.lunch.split(',')
        var listUnique = lunchList.filter(function (value) {
          return value.trim() !== ''
        })
        if (listUnique.length <= 3) {
          $scope.message = $scope.success
        } else $scope.message = $scope.error
      }
    }
  }
})()
