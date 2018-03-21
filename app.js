// Set-up server
var http = require('http');
var route = require('./routes');

var server = http.createServer((req,res) => {
	route.route(res,req);
});

server.listen(8080,'127.0.0.1');
console.log('now listening to port:8080');