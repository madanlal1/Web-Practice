const express = require('express');
const app = express();

//require path module
const path = require('path');

//relative path
const staticPath = path.join(__dirname, "../public");

//build in middleware
app.use(express.static(staticPath));


app.listen(8000, () => {
    console.log("port no 8000 is listening")
})