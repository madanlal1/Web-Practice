const http = require('http');
const fs = require('fs');

const jsonData = fs.readFileSync('json2.json','utf-8');
const data = JSON.parse(jsonData);

const server = http.createServer((req,res) => {
    if(req.url == '/userapi') 
    {
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end(jsonData);
    }   
});

server.listen(8000, "127.0.0.1", () => {
    console.log('starting server at port no 8000');
});