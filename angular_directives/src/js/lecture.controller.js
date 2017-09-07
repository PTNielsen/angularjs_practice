(function() {
  'use strict';

  angular.module('lecture').controller('LectureController', LectureController);

  function LectureController() {
    var vm = this;

    vm.movies = [
      { id: 31, title: 'Ghostbusters', year: 1986, genre: 'comedy' },
      { id: 24, title: 'First Blood', year: 1982, genre: 'action' },
      { id: 39, title: 'A Nightmare on Elm Street', year: 1984, genre: 'horror' },
      { id: 15, title: 'Fast Times at Ridgemont High', year: 1982, genre: 'comedy' },
      { id: 84, title: 'Sixteen Candles', year: 1984, genre: 'drama' },
      { id: 6, title: 'Ferris Bueller\s Day Off', year: 1986, genre: 'comedy' }
    ];
  }
})();
