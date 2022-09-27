var http = require("http");
let dt = require("./myFirstModule");
// http
//   .createServer(function (req, res) {
//     res.writeHead("200", { content: "text/plane" });
//     res.end("Hello World");
//   })
//   .listen(8080);

http
  .createServer(function (req, res) {
    res.writeHead("200", { content: "text/plane" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
