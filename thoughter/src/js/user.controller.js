(function() {
  'use strict';

  angular.module('thoughter')
    .controller('UserController', UserController);

  UserController.$inject = ['$state', 'UserService'];

  function UserController($state, UserService) {
    let vm = this;

    vm.loginData = {};

    /**
     *  Authenticate and log in a user given the data provided
     *  @param  {Object} userData User data that must contain username and password properties
     *  @return {void}
     */
    vm.login = function login(userData) {
      UserService.login(userData.username, userData.password)
        .then(function handleLogin(response) {
          $state.go('create');
        })
        .catch(function handleError(err) {
          console.warn(err);
        });
    };

    vm.logout = function logout() {
      UserService.logout();
    }
  };
})();
