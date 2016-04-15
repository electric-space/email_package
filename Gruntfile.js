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
            },
            
            
            
            
          },
          
        copy:{
            main:{
                files: [
                    {expand: true, flatten: true, src: ['src/img/*.gif','src/img/*.jpg','src/img/*.png'], dest: 'dist/img'},
                    {expand: true, flatten: true, src: ['src/index.html'], dest: 'dist/'}
                ],
                
            }
              
        }
		
		
		
		
	});

	grunt.loadNpmTasks('grunt-premailer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('default',['premailer', 'copy']);
}