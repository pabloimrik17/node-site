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
var router = require('./app/routes');

var app = express();
var port = 8080;

// Establecemos el fichero de rutas
app.use('/', router);

// Assets publicos
app.use(express.static(__dirname+'/public'));

app.listen(port, function() {
    console.log('App started');
});

