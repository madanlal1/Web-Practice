const express = require('express');
const app = express();
const hbs = require('hbs');
const requests = require('requests');

//to set the view engine
app.set("view engine", "hbs");

//template root engine  //render index.hbs file (calling : localhost:8000/?name=pune)
app.get("", (req,res) => {
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=39a9a737b07b4b703e3d1cd1e231eedc`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
          console.log(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
          res.write(arrData[0].name);
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
})

//404 error page
app.get("*", (req,res) => {
    res.render("<h1>404 Error Page Not Found</h1>");
})


app.listen(8000, () => {
    console.log("port no 8000 is listening");
})