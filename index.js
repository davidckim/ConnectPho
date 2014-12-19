var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/html/'));
app.use(express.static(__dirname + '/js/'));
app.use(express.static(__dirname + '/stylesheets/'));



io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('dropPieceFunction', function (msg) {
  socket.broadcast.emit('clicked', msg);
});

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});