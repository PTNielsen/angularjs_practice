(function() {
  'use strict';

  angular.module('gh')
    .filter('fileSizeFormatter', fileSizeFormatter);

  function fileSizeFormatter() {
    return function doConverting(size) {
      let convertedSize = Number(size);
      
      return (convertedSize / 1000) + 'MB';
    }
  };
})();
