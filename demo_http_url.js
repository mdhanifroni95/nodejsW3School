// Read the Query String
var http = require("http");
http
 .createServer(function (req, res) {
  res.writeHead("200", { content: "text/plan" });
  res.write(req.url);
  res.end();
 })
 .listen(8080);
