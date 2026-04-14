  import http from 'http';

  const server = http.createServer((req, res) => {
      if(req.url === "/"){
        res.end("<h1>welcome to home page</h1>");
        res.end("<a href='/contact'> contact page❤️ </a>");
      }else if(req.url === "/about"){
        res.end("<h1>welcome to about page</h1>");
      }else if(req.url === "/contact"){
        res.end("<h3>welcome to contact page</h3>");
      }else {

        res.end("<h1>error 404</h1>");
      }
  });

     server.listen(4000,() => console.log("server up"));