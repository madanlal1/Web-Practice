const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.end('<h1>Home Page</h1>')
    }
    else if(req.url == '/about') {
        res.end('<h1>AboutUS Page</h1>')
    }
    else if(req.url == '/contact') {
        res.end('<h1>ContactUS Page</h1>')
    }
    else {
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end('<h1>404 Error! Page not found</h1>')
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log('starting server at port no 8000');
});