(function() {
  'use strict';

  angular.module('bb').controller('GenreController', GenreController);

  function GenreController() {
    let vm = this;

    vm.genres = [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Drama' },
      { id: 3, name: 'Comedy' }
    ];

    /**
     *  Gets the name of the genre when an id is provided
     *  @param  {Number|String} id The id of the genre which is stored in the movie object
     *  @return {String}           The name of the corresponding genre
     */
    vm.getGenreName = function getGenreName(id) {
      let name = 'Unknown'

      vm.genres.forEach(function findTheGenre(genre) {
        if (Number(genre.id) === Number(id)) {
          name = genre.name
        }
      })

      return name;
    }
  };
})();
