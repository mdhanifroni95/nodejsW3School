const http = require('http');
const url = require('url');
const fs = require('fs');
http.createServer(function (req, res) {
 const q = url.parse(req.url, true);
 const fileName = '.' + q.pathname;
 fs.readFile(fileName, function (err, data) {
  if (err) {
   res.writeHead(400, { 'content-type': 'text/plan' });
   return res.end("404 Not Found");
  }
  res.writeHead(200, { 'content-type': 'text/plan' });
  res.write(data);
  return res.end();
 })
}).listen(8081);