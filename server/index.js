const http = require('http');
var server = require('http').createServer();
var io = require('socket.io')(server);

// require('./config/connectMongo');
var route = require('./routes');
// var Auth = require('./model/auth');

var io = require('socket.io')(http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    route.routes(req, res);
}).listen(5000));


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

// server(function(req, res){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         route.routes(req, res);
// });
// server.listen(5000);
