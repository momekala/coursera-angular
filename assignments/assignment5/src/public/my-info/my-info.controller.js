(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService', 'ApiPath'];
function MyInfoController(MyInfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.saved = MyInfoService.isSaved();
  $ctrl.user = MyInfoService.getUserInfo();
  $ctrl.menuItem = MyInfoService.getMenuItem();
  $ctrl.basePath = ApiPath;
}

})();
