const http = require("http");
const { findAviablePort } = require("./10.free-port.js");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request recivied");
  res.end("Hola mundo");
});

findAviablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `server listening on port http://localhost:${server.address().port}`
    );
  });
});
