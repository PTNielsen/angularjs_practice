(function() {
  'use strict';

  angular.module('lecture')
    .filter('likeOrdering', likeOrdering);

  function likeOrdering() {
    return function doLikeOrdering(collection) {
      if (!Array.isArray(collection)) {
        return collection;
      };

      return collection.sort(function doLikeSorting(a, b) {
        a.likes - b.likes
      });
    };
  };
})();
