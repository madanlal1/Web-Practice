const mysql = require('mysql');

const connection = mysql.createConnection({
    connectionLimit: 10,
    password: 'blahblah',
    user: 'admin',
    database: 'noderestapi',
    host: 'localhost',
    port: '3000'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected...');
});

module.exports = connection;