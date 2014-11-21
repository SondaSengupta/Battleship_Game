'use strict';

module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '_site/**/*.html',
          '_site/css/**/*.css',
          '_site/js/**/*.js',
          '_site/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      },
      sass: {
        files: 'app/**/*.scss',
        tasks: 'sass:serve'
      }
    },
    connect: {
      options: {
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: ['_site', '.sass']
        }
      },
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'app/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    sass: {
      options: {
        bundleExec: true,
        loadPath: ['app/_bower_components']
      },
      serve: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: 'app/_scss',
          src: '**/*.{scss,sass}',
          dest: '.sass/css',
          ext: '.css'
        }]
      }
    },
  });

  grunt.registerTask('serve', ['sass:serve', 'connect:livereload', 'connect:server', 'watch']);
  grunt.registerTask('check', ['jshint:all']);

};
