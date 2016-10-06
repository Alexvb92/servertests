// http module require
var http = require('http');

// define port we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;
var good = ['nice', 'cool', 'awesome']
var bad = ['ungood', 'not ncie', 'unawesome']

function handleRequest1 (request , response) {
	response.end('very' + good[Math.floor(Math.random() * good.length)])
}
function handleRequest2 (request , response) {
	response.end('very' + bad[Math.floor(Math.random() * bad.length)])
}
// create a server
var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);


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
