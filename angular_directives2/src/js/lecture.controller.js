(function() {
  'use strict';

  angular.module('lecture')
    .controller('LectureController', LectureController);

  function LectureController() {
    let vm = this;
    vm.fruits = [
      {name: 'strawBerry', likes: 5},
      {name: 'raspBerry', likes: 2},
      {name: 'maNgo', likes: 1000},
      {name: 'kiwi', likes: 4},
      {name: 'blood orange', likes: 8},
      {name: 'pine apple', likes: 9}
    ];

    vm.chooseFruit = function chooseFruit() {
      console.log('Choosing a fruit');
    };
  };
})();
