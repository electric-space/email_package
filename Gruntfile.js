module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		premailer: {
            simple: {
              options: {
                  removeComments: true,
                  removeClasses: true,
                  baseUrl: 'http://esdev.co.uk/pl-emails/15196/'
              },
              files: {
                'src/index.html': ['src/template.html']
              }
            }
          }
		
		
		
		
	});

	grunt.loadNpmTasks('grunt-premailer');
	
	grunt.registerTask('inline',['premailer']);
}