(function() {
  'use strict';

  angular.module('lecture')
    .directive('panel', panel);

  function panel() {
    let $ = angular.element;

    return {
      templateUrl: '/templates/panel.template.html',
      restrict: 'E',
      link: setupCollapse,
      transclude: true,
      scope: {
        heading: '='
      }
    };

    function setupCollapse(scope, element) {
      $(element)
        .find('header')
        .on('click', function hidePanelBody() {
          $(element)
            .find('article')
            .toggleClass('hidden');
        });
    };
  };
})();
