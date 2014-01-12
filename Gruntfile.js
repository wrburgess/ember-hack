module.exports = function(grunt){

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          dist: {
              src: [
                  'libs/jquery-2.0.3.js',
                  'libs/handlebars-1.0.0.js',
                  'libs/ember-1.2.0.js',
                  'libs/ember-data-1.0.0.beta.3.js',
                  'app/app.js',
                  'app/router.js',
                  'app/components/*.js',
                  'app/controllers/*.js',
                  'app/helpers/*.js',
                  'app/models/*.js',
                  'app/store.js',
                  'app/routes/*.js',
                  'app/views/**/*.js'
              ],
              dest: 'public/application.js'
          }
      },
      cssmin: {
          combine: {
              files: {
                  'public/application.min.css': 'public/application.css'
              }
          }
      },
      ember_handlebars: {
        options: {
            processName: function(filePath) {
              var shortFilePath = filePath.replace(/app\/templates\//, '').replace('.hbs', '');
              return shortFilePath;
            }
        },
        compile: {
          files: {
            'public/templates.js': 'app/templates/**/*.hbs'
          }
        }
      },
      watch: {
        handlebars: {
          files: ['app/templates/**/*.hbs'],
          tasks: ['ember_handlebars']
        },
        haml: {
          files: ['app/html/*.haml', 'index.html.haml'],
          tasks: ['haml']
        },
        javascripts: {
          files: [
                  'libs/jquery-2.0.3.js',
                  'libs/handlebars-1.3.0.js',
                  'libs/ember-1.3.0.js',
                  'libs/ember-data-1.0.0-beta.5.js',
                  'app/app.js',
                  'app/router.js',
                  'app/components/*.js',
                  'app/controllers/*.js',
                  'app/helpers/*.js',
                  'app/models/*.js',
                  'app/store.js',
                  'app/routes/*.js',
                  'app/views/**/*.js'
              ],
          tasks: ['concat', 'uglify']
        },
        css: {
          files: 'app/stylesheets/*.scss',
          tasks: ['sass', 'cssmin']
        }
      },
      haml: {
          dist: {
              files: {
                  'public/mock.html': 'app/html/mock.haml',
                  'public/index.html': 'index.html.haml'
              }
          }
      },
      jasmine: {
        pivotal: {
          src: '/libs/jasmine-2.0.0/*.js',
          options: {
            version: '2.0.0',
            specs: 'spec/**/*spec.js',
            helpers: 'spec/helpers/*.js'
          }
        }
      },
      sass: {
          dist: {
              files: {
                  'public/application.css': 'app/stylesheets/application.scss'
              }
          }
      },
      uglify: {
          build: {
              src: 'public/application.js',
              dest: 'public/application.min.js'
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-handlebars');
  grunt.loadNpmTasks('grunt-install-dependencies');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'haml', 'ember_handlebars']);
  grunt.registerTask('specs', ['concat', 'uglify', 'sass', 'cssmin', 'haml', 'jasmine']);
}