grunt.loadNpmTasks('grunt-wiredep');

grunt.initConfig({
    bowerInstall: {
      target: {
        src: 'index.html'
      }
    }
});
