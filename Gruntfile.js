/* eslint-disable func-names */
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    run: {
      options: {
      },
      client: {
        cmd: 'npm',
        args: [
          'run',
          'client',
        ],
      },
      upload: {
        cmd: 'node',
        args: [
          'upload.js',
        ],
      },
    },
  });

  grunt.registerTask('default', ['run:client', 'run:upload']);
};
