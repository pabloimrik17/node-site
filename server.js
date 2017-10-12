// var http = require("http");
//
// function handleRequests(req, res) {
//     res.end('Hello World!');
// }
//
// var server = http.createServer(handleRequests);
//
// server.listen(8080, function() {
//     console.log('Listening on port 8080');
// });

// EXPRESS VERSION

var express = require('express');

var app = express();
var port = 8080;

app.listen(port, function() {
    console.log('App started');
});

app.get('/', function(req, res) {
   res.send('Hello World!');
});