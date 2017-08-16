var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
    response.end("YAY!!!! I did it!!!!!" + request.url);
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on http://localhost:%s", PORT);
});

var http = require("http");

var PORT = 7500;

function handleRequest(request, response) {
    response.end("or maybe not!!!!!" + request.url);
}


var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on http://localhost:%s", PORT);
});