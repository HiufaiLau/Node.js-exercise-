//1.  to initialise the server and assign it to a port:
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// how to use debug??
// const debug = require('debug')('myApp:server');
app.listen(port, () => {
    console.log('Server is up and running on port ', port);

    // debug('Server is up and running on port ', port);
   
})

// display in browser
// set up event listener on the server
app.get('/', function(req,res) {
    return res.send("<h1>hello from my app express server!</h1>")
})

