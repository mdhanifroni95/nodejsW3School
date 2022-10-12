const http = require('http');
const up = require('upper-case');
http.createServer(function (req, res) {
 res.writeHead('200', { 'content-type': 'text/html' });
 res.write(up.upperCase("Hello World"));
 res.end();
}).listen(8080);
