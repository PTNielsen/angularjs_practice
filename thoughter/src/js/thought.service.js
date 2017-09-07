(function() {
  'use strict';

  angular.module('thoughter')
    .factory('ThoughtService', ThoughtService);

  ThoughtService.$inject = ['$http', 'UserService'];

  /**
   *  Constructor function for ThoughtService
   */
  function ThoughtService($http, UserService) {
    
    /**
     *  Makes external api call to get all thoughts
     *  @param  {Number} page Pagination value that sets offset in http call
     *  @return {Promise} 
     */
    function getThoughts(page = 0) {
      let pageSize = 10;

      return $http({
        method: 'get',
        url: `http://thoughter.herokuapp.com/api/Thoughts?filter={"order": "createTime DESC","limit":"${pageSize}","offset":"${page * pageSize}"}`
      }).then(function handleResponse(response) {
        console.log(response.status);
        return response.data;
      });
    };

    /**
     *  Makes external api call to retrieve a single thought
     *  @param  {Number}  id The id of the thought we want to retrive
     *  @return {Promise}
     */
    function getThought(id) {
      // Could do a data audit here to ensure id is provided

      return $http({
        method: 'get',
        url: `http://thoughter.herokuapp.com/api/thoughts/${id}`
      }).then(function handleResponse(response) {
        console.log(response.status)
        return response.data
      })
    };

    /**
     *  Makes an ajx call which persists the thought
     *  @param  {String}  thought The text that will be persisted
     *  @return {Promise}
     */
    function addThought(text) {
      if (!text.length) {
        return Promise.reject('Text not provided.');
      }

      // We could check if there is a token on the UserService
      // If there is not, we could return out before we make the http call

      return $http({
        method: 'post',
        url: 'http://thoughter.herokuapp.com/api/thoughts',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': UserService.getToken()
        },
        data: {
          content: text
        }
      }).then(function handleResponse(response) {
        console.log(response.status)
        return response.data
      });
    }

    return {
      getThoughts: getThoughts,
      getThought:  getThought,
      addThought:  addThought
    };
  };
})();
