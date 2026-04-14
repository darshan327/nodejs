import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(202, "Good", { "Content-Type": "text/html" });
    res.write("<h1>what's good bug?</h1>");
    res.end();  
});

server.listen(3000, () => console.log("server up"));