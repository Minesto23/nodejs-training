const { request } = require('http');
var http = require('http');

http.createServer((request, response) =>{
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write("Hello World nodejs");
    response.end();
}).listen(8080);