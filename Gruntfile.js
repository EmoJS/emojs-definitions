/*
 * EmoJS definitons
 * emojs.github.io
 *
 * Copyright (c) 2014 RedRiderX
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
  
    'json-minify': {
      default_options: {
        files: {
          'definitions.min.json': ['definitions.json']
        }
      }
    },

    // Make sure generated json is valid
    jsonlint: {
      default: {
        src: [ 'definitions.min.json' ]
      }
    },

    // Automatically strip comments and minify def list as changes are made
    watch: {
      files: 'definitions.json',
      tasks: 'default'
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // grunt.loadNpmTasks('node-json-minify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsonlint');

  // By default, strip comments and minify.
  grunt.registerTask('default', ['json-minify', 'jsonlint']);
};
