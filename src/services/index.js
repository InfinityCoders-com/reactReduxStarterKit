import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

socket.emit('connection', 'Hello World');
socket.emit('event', 'Hello World');

socket.on('eventResponse', msg => console.log(msg, 'on msg'))
