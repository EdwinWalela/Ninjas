var fs = require('fs');

function route(res,req){
	if(req.url === '/'){
		res.writeHead(200,{'Content-type':'text/html'})
		fs.createReadStream(__dirname +'/index.html').pipe(res)
	} else if(req.url === '/team'){
		res.writeHead(200,{'Content-type':'text/html'})
		fs.createReadStream(__dirname + '/team.html').pipe(res)
	} else if(req.url === '/api.json'){
		res.writeHead(200,{'Content-type':'application/json'})
		fs.createReadStream(__dirname + '/data.json').pipe(res)
	} else {
		res.writeHead(200,{'Content-type':'text/html'})
		fs.createReadStream(__dirname + '/404.html').pipe(res)
	}
}

module.exports.route = route;