module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/angular-bandsintown-api-factory.min.js' : ['src/angular-bandsintown-api-factory.js']
                }
            },
            options: {
                banner: '\n/*! <%= pkg.name %> v<%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) by <%= pkg.author %> */\n',
            }
        },
        concat: {
            options: {
                separator: ';',
                banner: '\n/*! <%= pkg.name %> v<%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) by <%= pkg.author %> */\n',
            },
            dist: {
                files : {
                    'dist/angular-bandsintown-api-factory.js' : ['src/angular-bandsintown-api-factory.js']
                }
            },
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/angular-bandsintown-api-factory.js'
                ],
                tasks: ['uglify', 'concat'],
                options: {
                    spawn: true,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);

};
