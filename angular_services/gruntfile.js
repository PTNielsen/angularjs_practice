'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    karma: {  // Task name, do not make up, defined already
      all: {  // Target name, name is arbitrary
        options: {
          frameworks: ['mocha', 'chai'],
          browsers:   ['Chrome'],
          files:      [ // Order is important when listing required files
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/school.module.js',
                        'src/js/**/*.js', // Using the glob will not duplicate files
                        'src/js/**/*.js',
                        'test/**/*.spec.js'
                      ],
          singleRun: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['karma']);
};
