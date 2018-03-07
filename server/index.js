const http = require('http');
require('./appMysql/');
require('./config/connectMongo');
// require('./backup');

const Auth = require('./model/auth');
const route = require('./routes');
const Log = require('./app/helpers/');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    route.routes(req, res);
}).listen(5000);

const io = require('socket.io')(server);

io.on('connection', function(client){
    Log('Socket Connected!');
    client.on('event', function(msg){
        Log(`Event: ${msg}`);
        client.emit('eventResponse', 'hi i am world.');
    });
    client.on('disconnect', function(){
        Log('Socket Disconnected!');
    });
});
