var http = require('http');

require('./config/connectMongo');
var route = require('./routes');
var Auth = require('./model/auth');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    route.routes(req, res);
}).listen(5000);
