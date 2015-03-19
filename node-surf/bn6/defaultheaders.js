var http = require('http');

var server = http.createServer(function (req, res){
	console.log('request headers...');
	console.log(req.headers);
	res.write('hello client"');
	res.end();
});
server.listen(3000);
console.log('server running on port 30000');
