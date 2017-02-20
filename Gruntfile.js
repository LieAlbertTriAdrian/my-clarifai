'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-bg-shell');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bgShell: {
            _defaults: {
                bg: true
            }
        }
    });

    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    grunt.registerTask('test-style', ['jshint']);
    grunt.registerTask('test', ['test-style']);
};
