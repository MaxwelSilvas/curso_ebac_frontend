module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        uglify: {
            build: {
                src: 'js/*.js',
                dest: 'js/minified/',
                expand: true,
                flatten: true,
                ext: '.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
