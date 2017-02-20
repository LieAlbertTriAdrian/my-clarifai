'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');

    return {
        files: ['./**/*.js', './*.js'],
        options: {
            ignores: ['node_modules/**/*.js'],
            jshintrc: '.jshintrc'
        }
    };
};
