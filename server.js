var http = require("http");

function handleRequests(req, res) {
    res.end('Hello World!');
}

var server = http.createServer(handleRequests);

server.listen(8080, function() {
    console.log('Listening on port 8080');
});