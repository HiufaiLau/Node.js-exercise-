const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});
  
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
});
  
io.on('connection', function(socket){
    socket.broadcast.emit('hi');
});
  
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});




// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Start running');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// let app = require('express')();
// let http = require('http').createServer(app);
// // app.get('/', function(req, res){
// //   res.send('<h1>Server is running</h1>');
// // });
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
//   });


// http.listen(8080, function(){
//   console.log('listening on *:8080');
// });