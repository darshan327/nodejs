import http from 'http'

const server = http.createServer((req, res) => {
  res.writeHead(202, "Good", {
    "content-type": "text/html"
  });

  res.write("<h1>Hello from node js</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});