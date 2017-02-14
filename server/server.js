const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{

console.log('New user connected');
socket.on('createMessage',(message,callback) =>{
  console.log('createMessage',message);
//socket.emit from Admin text welcom to the chat app
socket.emit('newMessage',generateMessage('Admin','Welcome to the chatapp'));
//socket.broadcast.emit from Admin text new user joined
callback('This is from the server');
socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'));
  io.emit('newMessage',generateMessage(message.from,message.text));
  socket.broadcast.emit('newMessage',{
    from:message.from,
  text:message.text,
createdAt:new Date().getTime()  })
})
socket.on('disconnect',function(){
  console.log('User was disconnected');
});


});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
