(function() {
  'use strict';

  angular.module('gh')
    .filter('popularityOrder', popularityOrder);

  function popularityOrder() {
    return function doPopularityOrder(collection) {
      if(!Array.isArray(collection)) {
        return collection;
      }

      let workingRepos = [].concat(collection);

      return workingRepos.sort(function doPopularitySort(a, b) {
        return calculatePopularity(b) - calculatePopularity(a);
      })
    }

    function calculatePopularity(repo) {
      return repo.stargazers_count + (2 * repo.forks_count) + (0.5 * repo.open_issues_count)
    }
  };
})();
