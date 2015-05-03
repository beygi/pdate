module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                options: {
                    mangle: true
                },
                files: [{
                    src: ['pdate.js'],
                    dest: 'pdate.min.js'
                }]
            }
        },
        wrap: {
            main: {
              src: ['pdate.js'],
              dest: 'pdate.js',
              options: {
                wrapper: ['(function(){','}());']
              }
            }
        },
        concat: {
            main: {
                src: ['src/calendar.js','src/pdate.js'],
                dest: 'pdate.js'
            }
        },

        jasmine: {
            components: {
              src: [
              'pdate.min.js'
              ],
              options: {
                specs: 'tests/spec/*Spec.js',
                keepRunner : true,
                //helpers: 'test/spec/*.js'
                summary: 'true'
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-wrap');

    // Default task(s).
    grunt.registerTask('default', ['concat','wrap','uglify']);
    grunt.registerTask('travis', ['jasmine']);

};
