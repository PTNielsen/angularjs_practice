'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      all: {
        options: {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          singleRun: true,
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/thoughter.module.js',
            'src/js/**/*.js',
            'src/test/**/*.spec.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};
