const express = require('express');
// const apiRouter = require('./routes');

const app = express();

app.use(express.json);
// app.use('/api/chirps', apiRouter);


app.listen('3000' || process.env.PORT, () => {

    console.log(`server is running on port: ${process.env.PORT || '3000'}`);
});