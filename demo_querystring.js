const http = require("http");
const url = require("url");
http
  .createServer(function (req, res) {
    res.writeHead("200", { content: "text/plan" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + "" + q.month;
    res.end(txt);
  })
  .listen(8080);