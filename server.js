const { createBareServer } = require("@tomphttp/bare-server-node");
const http = require("http");

const bare = createBareServer("/bare/");

http.createServer((req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(200);
    res.end("Bare server running");
  }
}).listen(8080);
