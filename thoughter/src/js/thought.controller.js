(function() {
  'use strict';

  angular.module('thoughter')
    .controller('ThoughtController', ThoughtController);

  ThoughtController.$inject = ['$state', '$stateParams', 'ThoughtService'];

  function ThoughtController($state, $stateParams,ThoughtService) {
    let vm = this;

    vm.message    = null;
    vm.thoughts   = [];
    vm.newThought = {};
    vm.page       = -1;

    vm.getThoughts = function getThoughts() {
      vm.page++;

      ThoughtService.getThoughts(vm.page)
        .then(function handleThoughtData(data) {
          vm.thoughts = vm.thoughts.concat(data);
        })
        .catch(function handleError(err) {
          console.warn(err);
          vm.hasError = true;
          if (err.status === 404) {
            vm.message = 'Looks like API URL was off'
          }
        });
    };

    vm.getThought = function getThought(id) {
      ThoughtService.getThought(id)
        .then(function handleThoughtData(data) {
          vm.thought = data;
        })
        .catch(function handleError(err) {
          vm.hasError = true;
          if (err.status === 404) {
            vm.message = 'Looks like API URL was off'
          }
        });
    };

    /**
     *  Adds a thought from the user and adds the new thought
     *  to the page at the top. Uses the ThoughtService for
     *  actual persistence of data
     *  @param {String} thought The content of the new thought *REQUIRED*
     */
    vm.addThought = function addThought(thought) {
      ThoughtService.addThought(thought.content)
        .then(function handleNewThought(data) {
          $state.go('single-thought', { id: data.id });
        })
        .catch(function handleError(err) {
          console.warn(err);
        });
    };

    if ($stateParams.id) {
      vm.getThought($stateParams.id);
    } else {
      vm.getThoughts();
    };
  };
})();
