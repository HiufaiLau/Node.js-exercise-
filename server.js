
const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)

// console.log('\x1b[33m%s\x1b[0m', 'hi!')
console.log('My %s is %d years old', 'cat', 2)
const chalk = require('chalk')
console.log(chalk.yellow('hi!'))
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
// 

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



//-------------------simple Node.js test----------------------
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, name => {
//     console.log(chalk.green(`Hi ${name}!`))
//     readline.close()
//   })

// --------------------installed inquirer-------------=--------
// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]
// inquirer.prompt(questions).then(answers => {
//   console.log(chalk.yellow(`Hi ${answers['name']}!`))
// })



// ------------------with readline-sync------------------------
// cant run nodemon !!!!!!!!!!

let readlineSync = require('readline-sync');
 
// Wait for user's response.
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
let favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');