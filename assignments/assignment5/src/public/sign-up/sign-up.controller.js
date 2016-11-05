(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var $ctrl = this;
  $ctrl.saved = false;
  $ctrl.user = {};
  $ctrl.menuItem = {};
  $ctrl.menuItemOk = true;

  $ctrl.submit = function () {
    MyInfoService.saveUserInfo($ctrl.user);
    var menuItem = $ctrl.checkMenuItem($ctrl.user);
    menuItem.then(function (response) {
      $ctrl.menuItem = MyInfoService.getMenuItem();
      $ctrl.user = MyInfoService.getUserInfo();
      $ctrl.saved =  true;
    })
    .catch((err) => {
      $ctrl.user = MyInfoService.getUserInfo();
      $ctrl.saved = MyInfoService.isSaved();
      $ctrl.menuItemOk = false;
    })
  };
  $ctrl.checkMenuItem = function (user) {
    return MyInfoService.checkMenuItem(user);
  };
  $ctrl.menuItemOk = function () {
    return $ctrl.menuItemOk;
  };
}


})();
