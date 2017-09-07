(function() {
  'use strict';

  angular.module('lecture')
    .directive('tiyMovie', tiyMovie);

  function tiyMovie() {
    return {
      restrict: 'EA',
      templateUrl: '/templates/tiy-movie.template.html',
      scope: {
        movie: '=movie',
        collection: '=collection' // We could just use '=' when the they are the same name
      }
    }
  }
})();
