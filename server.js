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
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var app = express();
var port = 8080;

var router = require('./app/routes');

// Asignamos Ejs como sistema de vistas
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

// Establecemos el fichero de rutas
app.use('/', router);

// Assets publicos
app.use(express.static(__dirname+'/public'));

app.listen(port, function() {
    console.log('App started');
});

