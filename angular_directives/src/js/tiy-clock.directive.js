(function() {
  'use strict';

  angular.module('lecture')
    .directive('tiyClock', tiyClock);

  tiyClock.$inject = ['dateFilter'];

  function tiyClock(dateFilter) {
    return {
      restrict: 'E',
      templateUrl: '/templates/tiy-clock.template.html',
      link: setUpClock,
      scope: {
        timeFormat: '=timeFormat',
        capture: '&capture' // '&' allows us to include a function instead of just data
      }
    };

    // This function will be called
    // everytime we use the tiy-clock element
    function setUpClock(scope, element/*, attrs, controller*/) {
      // angular.element allows us to use jquery
      let $ = angular.element;

      function updateTime() {
        let now = new Date();
        $(element)
          .find('time')
          .text( dateFilter(now, scope.timeFormat) );
        // Below dynamically uses filtered date to get
        // hexidecimal color to update background color
        $(element).find('time')[0].style.backgroundColor = '#' + dateFilter(now, 'HHmmss');
      };

      setInterval(updateTime, 1000);
      updateTime();
    };
  };
})();
