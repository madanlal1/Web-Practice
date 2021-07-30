const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req,res) => {
    // fs.readFile("file.txt", (err, data) => {
    //     res.end((data).toString());
    // })

    //read data by ReadStream
    const rStream = fs.createReadStream("file.txt");

    rStream.on("data", (chunkData) => {
        res.write(chunkData);
    });
    rStream.on("end",() => {
        res.end();
    });
    rStream.on("error", (err) => {
        console.log(err);
        res.end("file not found!");
    });
})

server.listen(8008, "127.0.0.1");
