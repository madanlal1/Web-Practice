//npm install mysql
//keep database file in project root directory
//open mysql+apache server from XAMPP
const mysql = require('mysql');

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "", //pswd can be any
    database : "mydatabase"
});

con.connect((error) => {
    if(error) 
        throw error;
    else
        con.query("select * from mytable", (err,data) => {
            if(err)
                throw err;
            else 
                console.warn("all results are here",data);  //data[0].name
        })
})