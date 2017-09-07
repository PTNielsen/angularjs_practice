(function() {
  'use strict';

  angular.module('lecture')
    .controller('HeaderController', HeaderController);

  function HeaderController() {
    let vm = this;

    vm.captureTime = function captureTime() {
      console.log('Capturing the time..');
    }
  };
})();
