(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var $ctrl = this;

  $ctrl.submit = function () {
      $ctrl.completed = true;
      console.log("HELLO");
  };
}


})();
