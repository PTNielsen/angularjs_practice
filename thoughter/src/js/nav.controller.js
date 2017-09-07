(function() {
  'use strict';

  angular.module('thoughter')
    .controller('NavController', NavController);

  NavController.$inject = ['UserService'];

  function NavController(UserService) {
    let vm = this;

    /**
     *  Tells if the user is logged in or not
     *  @return {Boolean}
     */
    vm.isLoggedIn = function isLoggedIn() {
      return !!UserService.getToken();
    };
  };
})();
