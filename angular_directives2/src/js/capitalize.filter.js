(function() {
  'use strict';

  angular.module('lecture')
    .filter('capitalize', capitalize);

  function capitalize() {
    return function doCapitalize(text, doLowerCaseFirst) {
      // The first argument is always the thing to the
      // left of the pipe '|' in the html
      let convertedText = text

      if (doLowerCaseFirst) {
        convertedText = convertedText.toLowerCase();
      }

      return convertedText
        .split(' ')
        .map(function convertCase(word) {
          return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');
    }
  };
})();
