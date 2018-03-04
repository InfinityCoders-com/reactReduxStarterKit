const http = require('http');
require('./mysqlServer/');
require('./config/connectMongo');
const Auth = require('./model/auth');
const route = require('./routes');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    route.routes(req, res);
}).listen(5000);

const io = require('socket.io')(server);

console.log('=======================');
io.on('connection', function(client){
    console.log('its connected');
    client.on('event', function(msg){
        console.log(msg, 'event');
        client.emit('eventResponse', 'hi i am world.');
    });
    client.on('disconnect', function(){
        console.log('disconnected');
    });
});
