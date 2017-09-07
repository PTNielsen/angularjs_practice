(function() {
  'use strict';

  angular.module('bb').controller('MovieController', MovieController);

  /**
   *  Constructor function for MovieController
   */
  function MovieController() {
    let vm      = this;
    vm.newMovie = {}
    vm.movies   = [
      { title: "Dope-ass movie", releaseYear: 2017, genreId: 1 }
    ];

    /**
     *  Add movie to list of favorite movies
     *  @param {Object} movie An object that contains a title, releaseYear, and genreId representing a movie
     */
    vm.addMovie = function addMovie(movie) {
      if (typeof movie !== 'object' || typeof movie.title !== 'string') {
        return;
      }

      vm.movies.push({
        title: movie.title,
        releaseYear: movie.releaseYear,
        genreId: movie.genreId
      })

      vm.newMovie = {};
    };
  };
})();
