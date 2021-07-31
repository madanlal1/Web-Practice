const express = require('express');
const app = express();

app.get("/", (req,res) => {
    //we can send HTML via Express (http request)
    res.write("<h1>Express JS</h1>");
    res.write("<h1>welcome to Home Page</h1>");
    res.send();
})

app.get("/json", (req,res) => {
    //we can send JSON data via Express (http request)
    res.send([
        {
            id : 2,
            name : "john"
        },
        
        {
            id : 2,
            name : "john"
        }
    ])
})

//get JSON file
const fs = require('fs');
const jsonData = fs.readFileSync('json1.json','utf-8');
const data = JSON.parse(jsonData);

app.get("/jsonExternal", (req,res) => {
    //send JSON File via Express (http request) (it need via 'fs' module)
    res.send(jsonData);

})


app.listen(8000, () => {
    console.log("port no 8000 is listening");
})