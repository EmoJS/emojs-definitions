/*
 * json-minify - a grunt task wrapper for JSON.minify
 *
 * Copyright (c) 2014 RedRiderX
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Take source file(s) and pass them into grunt-string-replace, with the EmoJS list as a param
  grunt.registerMultiTask('json-minify', 'Grunt wrapper for JSON.minify', function () {

    JSON.minify = JSON.minify || require('node-json-minify');

    // Load user options
    var options = this.options();

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {

      var src = file.src.filter(function (filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        
        var contents = grunt.file.read(filepath);

        // minify file contents
        contents = JSON.minify(contents);

        return contents;
      });

      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};
