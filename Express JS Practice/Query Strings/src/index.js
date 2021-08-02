const express = require('express');
const app = express();
const hbs = require('hbs');

//require path module
const path = require('path');

//relative path
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//to set the view engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
//for partial directory
hbs.registerPartials(partialPath);

//build in middleware
app.use(express.static(staticPath));

//template root engine  //render index.hbs file
app.get("/", (req,res) => {
    // res.render('main', {layout: 'index'});  //OR
    res.render("index");
})

//render about.hbs file
app.get("/about", (req,res) => {
    //just getting name and city
    console.log("Name : "+req.query.name);
    console.log("City : "+req.query.city);

    ///////////////////////////////////// http://localhost:8000/about?name=Madan&city=$ukkur
    res.render("about", {
        name : req.query.name,
        city : req.query.city
    });
})

//404 error page
app.get("*", (req,res) => {
    res.render("404", {errorComment : "404 Page not found."});
})


app.listen(8000, () => {
    console.log("port no 8000 is listening");
})