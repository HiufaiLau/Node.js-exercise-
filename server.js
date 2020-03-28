
// ----------------socket.io simple chat code----------------------
// const app = require('express')();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
// });
  
// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       io.emit('chat message', msg);
//     });
//   });
  
// io.on('connection', function(socket){
//     socket.broadcast.emit('hi');
//   });
  
// http.listen(8080, function(){
//   console.log('listening on *:8080');
// });

// -------------------HTTP GET request ----------------------------
const https = require('https')
const options = {
  hostname: '127.0.0.1',
    port: 5000
    ,
  path: '/',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
// -------------------simple Node.js code--------------------------
// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<h1>Server running at http://${hostname}:${port}/<h1>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`this is Node.js server: is running at http://${hostname}:${port}/`);
// });


// ------------------------ with Express code-------------------------
// let app = require('express')();
// const hostname = '127.0.0.1';
// const port = 5000;
// let http = require('http').createServer(app);
// app.get('/', function(res){
//   res.send(`<h1>Server is listening on: ${hostname}:${port}/</h1>`);
// });
// app.get('/', function(res){
//     res.sendFile(__dirname + '/index.html');
//   });
// http.listen(port, function(){
//   console.log('listening on *:' + port);
// });



//-------------------simple Node.js test 
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })