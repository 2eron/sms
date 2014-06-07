'use strict';

module.exports = function(grunt){

	// project configuration
	grunt.initConfig({
		// metadata
		pkg: grunt.file.readJSON('package.json'),

		// task: clean
		clean: [
			'public/css/*'
		],
		// task: compass
		compass: {
			dist: {
				options: {
					sassDir: 'public/sass',
					cssDir: 'public/css',
					outputStyle: 'expanded'
				}
			}
		},
		concat: {
			options: {
				stripBanners: true
			},
			css: {
				src: [
					'public/css/base/reset.css',
					'public/css/ui/button.css',
					'public/css/ui/font.css',
					'public/css/sharing.css'
				],
				dest: 'public/css/bundle.css'
			}
		},
		watch: {
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			},
			files: ['public/**/*.scss'],
			tasks: ['compass', 'concat'],
			options: {
				livereload: true
			}
		}

	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// default
	grunt.registerTask('default', ['compass','concat']);
}