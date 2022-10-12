const http = require("http");
const fs = require("fs");
http
 .createServer(function (req, res) {
  fs.readFile("demofile1.html", function (err, data) {
   res.writeHead("200", { "Content-type": "text/plane" });
   res.write(data);
   return res.end();
  });
 })
 .listen(8081);
