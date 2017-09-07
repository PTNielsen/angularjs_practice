(function() {
  'use strict';

  angular.module('thoughter')
    .factory('UserService', UserService);

  UserService.$inject = ['$http']

  function UserService($http) {
    let token;

    /**
     *  Make external api call to authenticate and login a user
     *  @param  {String}  username A user's username
     *  @param  {String}  password A user's password
     *  @return {Promise}
     */
    function login(username, password) {
      // return a resolved promise for now but we would normally need
      // to make an external api call
      // We are able to use this variable letter inside the below
      // functions because functions in JS are CLOSURES.  Closures
      // allow us to create a variable in a higher scope to be
      // used later on
      token = 'abcdefghijklmnop';
      localStorage.setItem('token', token)

      return Promise.resolve({
        name: 'Patrick',
        id: '42knd2ksi44k3'
      });

      // return $http({
      //   method: 'post',
      //   url: ''
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   data: {
      //     username: username,
      //     password: password
      //   }
      // }).then(function handleResponse(response) {
      //   console.log(response.status)
      //   return response.data
      // });
    };

    function logout() {
      // Make token null for now but we could also send an API call
      // to the server to properly log out but we would need to
      // tell the server who we are by sending the token in the
      // authorization header
      localStorage.removeItem('token')
    };

    // Create a function to allow access to the token
    // Never pass it in directly - very poor security practice
    function getToken() {
      return localStorage.getItem('token');
    };

    return {
      login:     login,
      logout:    logout,
      getToken:  getToken
    };
  };
})();
