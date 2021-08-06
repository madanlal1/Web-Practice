const mysql = require('mysql');

mysql.createPool({
    connectionLimit: 10,
    password: 'blahblah',
    user: 'admin',
    database: 'mydatabase',
    host: 'localhost',
    port: '3000'
})

let mydb = {};

mydb.all = () => {
    return new Promise((resolve, reject) =>{

        pool.query('SELECT * FROM mydb', (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports = mydb;