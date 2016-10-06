// http module require
var http = require('http');

// define port we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

// function to handle requests and send respense
function handleRequest (request , response) {
	response.end('We made it everyone! This was your URL: ' + request.url)
}

// create a server
var server1 = http.createServer(handleRequest);

var server2 = http.createServer(handleRequest);


// start our server
server1.listen(PORT1, function() {
	//callback is triggered when server is successfully listening 
	console.log('Server listening on port', PORT1);
});

// start our server
server2.listen(PORT2, function() {
	//callback is triggered when server is successfully listening 
	console.log('Server listening on port', PORT2);
});
