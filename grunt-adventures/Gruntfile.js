module.exports = function(grunt) {
	grunt.registerTask('consoleCheck', function(){
		var contents = grunt.file.read('./src/app.js');
		if (contents.indexOf('console.log(') >= 0)
			grunt.fail.warn('cosole.log found in app.js');
	});

	grunt.registerTask('default', ['consoleCheck']);

	var fs = require('fs');
	grunt.registerTask('log-deploy', function(){
		var message = 'Deployment on ' + new Date();
		fs.appendFileSync('deploy.log', message + '\n');
		grunt.log.writeln('Appended "' + message +  '"');
	});


	grunt.registerTask('foo', function() {
		console.log('My task "%s" has arguments %j', this.name, this.args);
	});

	grunt.registerTask('build', function(grunt){
		console.log('building...');
	});

	grunt.registerTask('test', function(grunt){
		console.log('testing...');
	});

	grunt.registerTask('upload', function(grunt){
		console.log('uploading...');
	});

	grunt.registerTask('deploy', ['build', 'test', 'upload']);

	grunt.registerMultiTask('copy', function() {
		this.files.forEach(function(file){
			grunt.file.copy(file.src, file.dest);	 
		});
		grunt.log.writeln('Copied ' + this.files.length + ' files');
	});

	grunt.initConfig({
		copy: {
			target1: {
				'dest/file1.txt': 'src/file1.txt', 
				'dest/file2.txt': 'src/file2.txt'
			},
			target2: {
				'dest/file3.txt': 'src/file3.txt',
				'dest/file4.txt': 'src/file4.txt'
			}
		}
	});
};
