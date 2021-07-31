const express = require('express');
const app = express();

//routing in express:

app.get("/", (req,res) => {
    res.send("Hellow world from express...");
})

app.get("/about", (req,res) => {
    res.send("Hellow from about Page...");
})

app.get("/contact", (req,res) => {
    res.send("Hellow from contact Page...");
})


app.listen(8000, () => {
    console.log("port no 8000 is listening");
})