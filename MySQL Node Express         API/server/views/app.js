const express = require('express');
const products = require('./routes/products');
const db = require('../db');

const app = express();

//require path module
const path = require('path');

//relative path
const productPath = path.join(__dirname, "../routes/products");

//build in middleware
app.use(express.static(productPath));

app.get("/", (req,res) => {
    res.send("Hellow world from express...");
})

app.listen(8000, () => {
    console.log("port no 8000 is listening")
})