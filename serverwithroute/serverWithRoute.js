const https = require('http');

// Define port number as 3000
const port = 1337;

var routes = {
    '/': function index (request, response) {
    response.writeHead(200);
    response.end('Hello, World!');
    },
    '/foo': function foo (request, response) {
    response.writeHead(200);
    response.end('You are now viewing "foo"');
    }
}
    

https.createServer(function (request, response) {
    
    if (request.url in routes){
        return routes[request.url](request,response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(port);

console.log('Server listening on http://localhost:' + port)