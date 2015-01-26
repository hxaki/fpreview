module.exports = function(grunt) {
  var pkg = grunt.file.readJSON("package.json");
  var manifest = grunt.file.readJSON("src/manifest.json");

  var fileMaps = { browserify: {}, uglify: {} };
  var file, files = grunt.file.expand({cwd:'src/js'}, ['*.js']);
  for (var i = 0; i < files.length; i++) {
    file = files[i];
    fileMaps.browserify['build/unpacked-dev/js/' + file] = 'src/js/' + file;
    fileMaps.uglify['build/unpacked-prod/js/' + file] = 'build/unpacked-dev/js/' + file;
  }

  grunt.initConfig({
    // jshint: {
    //   options: grunt.file.readJSON('lint-options.json'),
    //   all: { src: ['package.json', 'lint-options.json', 'Gruntfile.json', 'src/**/*.js',
    //                 'src/**/*.json', '!src/js/libs/*'] }
    // },
    clean: ['build/unpacked-dev', 'build/unpacked-prod', 'build/*.crx'],
    mkdir: {
      unpacked: { options: { create: ['build/unpacked-dev', 'build/unpacked-prod']}},
      js: { options: { create: ['build/unpacked-dev/js']}}
    },
    copy: {
      main: { files: [ {
        expand: true,
        cwd: 'src/',
        src: ['**', '!js/**', '!**/*.md'],
        dest: 'build/unpacked-dev/'
      }]},
      prod: { files: [ {
        expand: true,
        cwd: 'build/unpacked-dev/',
        src: ['**', '!js/**'],
        dest: 'build/unpacked-prod/'
      }]}
    },
    uglify: { min: { files: fileMaps.uglify } },
    browserify: {
      build: { 
        files: fileMaps.browserify,
        options: { browserifyOptions: {
          debug: true,
          standalone: pkg['export-symbol']
        } }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask(
    'manifest', 'Extend manifest.json with extra fields from package.json',
    function() {
      var fields = ['name', 'version', 'description'];
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        manifest[field] = pkg[field];
      }
      grunt.file.write('build/unpacked-dev/manifest.json', JSON.stringify(manifest, null, 4) + '\n');
      grunt.log.ok('manifest.json genereated');
    }
  );
  grunt.registerTask('default', ['clean', 'mkdir:unpacked', 'copy:main', 'manifest', 'mkdir:js', 'browserify', 'copy:prod']);
};
