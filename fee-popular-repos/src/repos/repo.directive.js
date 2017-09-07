(function() {
  'use strict';

  angular.module('gh')
    .directive('repo', repo);

  function repo() {
    let $ = angular.element;

    return {
      templateUrl: '/repos/repo.template.html',
      restrict: 'E',
      scope: {
        repo: '='
      },
      link: collapsePanel
    };

    function collapsePanel(scope, element) {
      $(element)
        .find('header')
        .on('click', function toggleHidden() {
          $(element)
            .find('article')
            .toggleClass('hidden')
        })
    }
  };
})();
