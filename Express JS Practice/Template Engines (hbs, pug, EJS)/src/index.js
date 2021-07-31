const express = require('express');
const app = express();

//require path module
const path = require('path');

//relative path
const staticPath = path.join(__dirname, "../public");

//to set the view engine
app.set("view engine", "hbs");

//build in middleware
// app.use(express.static(staticPath));

//template root engine
app.get("/", (req,res) => {
    res.render('main', {layout: 'index'});
})

app.get("/about", (req,res) => {
    res.send("ok");
})



app.listen(8000, () => {
    console.log("port no 8000 is listening");
})